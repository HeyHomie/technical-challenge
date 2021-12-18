# frozen_string_literal: true
require 'logger'

class RepositoryCreationJob
  include Sidekiq::Worker

  attr_reader :errors
  queue_as :high_priority

  def perform(params)
    init_variables(params)
    init_user_github rescue user_not_found
    register_repositories(@user_db_id, @user_github) if @errors.empty? && @user_github
  end

  private
  def init_user_github
    @user_github = fetch_user
  end

  def fetch_user
    @client.user @username
  end

  def get_repositories(user_github)
    user_github.rels[:repos].get.data
  end

  def init_variables(args)
    @username = args['username']
    @client = Octokit::Client.new
    @repositories = []
    @user_db_id = args['user_db_id']
    @errors = []
  end

  def register_repositories(user_db_id, user_github)
    begin
      repos = get_repositories(user_github)
      unless repos.empty?
        repos.each do |repo|
          Repository.find_or_create_by(
            name: repo[:name],
            description: repo[:description],
            user_id: user_db_id,
            extra_data: repo
          )
        end
      end
    rescue StandardError => e
      general_error(e.message)
    end

    @repositories = repos
  end

  def general_error(e)
    @errors << e
    logger.error(message)
  end

  def user_not_found
    message = I18n.t('models.services.github_import_and_fetch.user_not_found')
    @errors << message
    logger.error(message)
  end

  def logger
    @logger ||= Logger.new(STDOUT)
  end
end
