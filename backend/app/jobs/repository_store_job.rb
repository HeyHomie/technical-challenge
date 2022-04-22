# frozen_string_literal: true

# Repository Creation job params: repositories
class RepositoryStoreJob < ApplicationJob
  include FaradayConnection
  queue_as :default

  def perform(user:, per_page: nil)
    init(user: user, per_page: per_page)
  end

  def init(user:, per_page: nil)
    @user = user
    @per_page = per_page || @user.public_repos || 5
    save_repos
  end

  def save_repos
    repositories.each do |repository|
      repo = Repository.find_or_create_by(
        id: repository['id'],
        user_id: @user.id
      )
      repo.update!(node_id: repository['node_id'],
                   name: repository['name'],
                   full_name: repository['full_name'],
                   private: repository['private'],
                   html_url: repository['html_url'],
                   description: repository['description'],
                   forks_count: repository['forks_count'],
                   stargazers_count: repository['stargazers_count'],
                   license: repository['license'].nil? ? nil : repository['license']['name'],
                   visibility: repository['visibility'],
                   language: repository['language'],
                   topics: repository['topis'],
                   ssh_url: repository['ssh_url'],
                   clone_url: repository['clone_url'],
                   updated_at: repository['updated_at'],
                   contributors_url: repository['contributors_url'],
                   subscribers_url: repository['subscribers_url'],
                   subscription_url: repository['subscription_url'],
                   forks_url: repository['forks_url'],
                   languages_url: repository['languages_url'],
                   stargazers_url: repository['stargazers_url'])
    end
  end

  def repositories
    @repositories ||= connect.get(
      "https://api.github.com/users/#{@user.login}/repos", { per_page: @per_page }
    ).body
  end
end
