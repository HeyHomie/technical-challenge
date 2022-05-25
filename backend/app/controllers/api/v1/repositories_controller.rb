# frozen_string_literal: true
require "github_api/client"
include GithubAPI


module Api
  module V1
    class RepositoriesController < ApiController
      def index

        github_client = GithubAPI::Client.new(ENV['GITHUB_TOKEN'])

        begin
          @user = github_client.get_user(user_params)
          @repos = github_client.get_user_repos(user_params, { per_page: 100, sort: 'updated' })
        rescue GithubAPI::Error => error
          render json: error.to_json, status: error.status
          return
        end


        db_user = User.find_or_create_by(github_id: @user['id'])
        db_user.update(@user.clone.keep_if { |k, _v| User.editable_columns.include? k.to_sym })
        db_user.sync_repositories(@repos)
        Repository.reindex

        if params[:filter]
          sanitized_filter = params[:filter].gsub(/[^a-zA-Z0-9\s]/, '')
          result = Repository.search(sanitized_filter,  where: {owner_id: db_user.id})
          result = result.map { |r| r.attributes.merge(owner: r.owner.attributes) }
          render json: result
          return
        end

        render json: db_user.repositories
      end

      private

      def user_params
        params.require(:username)
      end
    end
  end
end
