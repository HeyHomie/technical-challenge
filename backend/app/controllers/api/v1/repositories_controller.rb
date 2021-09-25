# frozen_string_literal: true

module Api
  module V1
    class RepositoriesController < ApplicationController

      def index
        if User.find_by(id: params[:user_id])
          repositories = Repository.where(user_id: params[:user_id])
          paginated_repos = paginate('repositories', repositories, params[:page])
          render json: paginated_repos
        else
          render json: { error: 'User not found' }, status: :not_found
        end
      end

      def create
        conn = create_faraday_connection
        user = User.find_by(id: params[:user_id])

        if user.present?
          repos = conn.get(
            "https://api.github.com/user/repos?user=#{user[:login]}",
            { per_page: 100, sort: 'updated' }
          ).body
          db_repos = Repository.where(user_id: params[:user_id]).select(:github_id)

          repos.each do | repo |
            if db_repos.include?(repo['id'])
              Repository.create(
                github_id: repo['id'],
                url: repo['html_url'],
                name: repo['name'],
                user_id: params[:user_id],
                fork: repo['fork'],
                description: repo['description'],
                language: repo['language'],
                stars: repo['stargazers_count'],
                forks: repo['forks_count'],
                license: repo['license'] ? repo['license']['name'] : nil,
                last_updated: repo['updated_at'],
                archived: repo['archived'],
                private: repo['private']
              )
            end
          end
          render json: { created: 'Repos for user created'}, status: :created
        else
          render json: { error: 'User not found' }, status: :not_found
        end
      end

      private

      def user_params
        params.require(:user_id)
      end
    end
  end
end
