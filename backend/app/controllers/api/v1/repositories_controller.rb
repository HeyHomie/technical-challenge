# frozen_string_literal: true
require "github_api/client"
include GithubAPI


module Api
  module V1
    class RepositoriesController < ApiController
      def index
        github_client = GithubAPI::Client.new(ENV['GITHUB_TOKEN'])
        user = github_client.get_user(user_params)
        repos = github_client.get_user_repos(user_params, { per_page: 100, sort: 'updated' })

        db_user = User.find_or_create_by(github_id: user['id'])
        db_user.update(user.clone.keep_if { |k, _v| User.editable_columns.include? k.to_sym })
        db_user.sync_repositories(repos)

        render json: db_user.repositories
      end

      private

      def user_params
        params.require(:username)
      end
    end
  end
end
