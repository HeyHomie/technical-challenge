# frozen_string_literal: true

module Api
  module V1
    class RepositoriesController < ApplicationController

      def index
        Repository.reindex
        if User.find_by(id: search_params[:user_id])
          repositories = search_repos
          paginated_repos = paginate('repositories', repositories, search_params[:page])
          render json: paginated_repos
        else
          render json: { error: 'User not found' }, status: :not_found
        end
      end

      def create
        conn = create_faraday_connection
        user = User.find_by(id: user_params)

        if user.present?
          response = conn.get(
            "https://api.github.com/user/repos?user=#{user[:login]}",
            { per_page: 100, sort: 'updated' }
          )

          if response.status == 200
            create_repositories(response.body, user[:id])
            render json: { created: 'Repos for user created'}, status: :created
          else
            render json: { error: "Error (#{response.status}) trying to get repository data from GitHub: #{response.body['message']} " }, status: response.status
          end

        else
          render json: { error: 'User not found' }, status: :not_found
        end
      end

      private

      def user_params
        params.require(:user_id)
      end

      def search_params
        params.require(:user_id, :page).permit(:q, :type, :language, :sort)
      end

      def search_repos
        # Get sort hash
        case search_params[:sort]
        when 'updated'
          sort = { last_updated: :desc }
        when 'name'
          sort = { name: :asc }
        when 'stars'
          sort = { stars: :desc }
        else
          sort = {_score: :desc}
        end

        # Create filter hash
        where = { user_id: search_params[:user_id] }
        if search_params[:language].present?
          where[:language] = search_params[:language]
        elsif search_params[:type].present?
          if search_params[:type] == 'fork'
            where[:fork] = true
          elsif search_params[:type] == 'archived'
            where[:archived] = true
          elsif search_params[:type] == 'private'
            where[:private] = true
          end
        end

        Repository.search(
          search_params[:q] ? search_params[:q] : '*',
          fields: [:name, :description],
          where: where,
          order: sort
        )
      end

      def create_repositories(repos,user_id)
        db_repos = Repository.where(user_id: user_id).select(:github_id)

        repos.each do | repo |
          if db_repos.include?(repo['id'])
            Repository.create(
              github_id: repo['id'],
              url: repo['html_url'],
              name: repo['name'],
              user_id: user_id,
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
      end
    end
  end
end
