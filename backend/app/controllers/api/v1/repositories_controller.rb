# frozen_string_literal: true

module Api
  module V1
    class RepositoriesController < ApplicationController
      def index
        user = User.find_by(login: search_params[:user_id])

        if user.present?
          repositories = search_repos(user[:id])

          if repositories.empty?
            response = GithubRepositoriesService.new.create_repositories(user)
            if response[:status] == 200
              paginated_repos = paginate('repositories', response[:message], search_params[:page])
              render json: paginated_repos, status: response[:status]
            else
              render json: response[:message], status: response[:status]
            end
          else
            paginated_repos = paginate('repositories', repositories, search_params[:page])
            render json: paginated_repos, status: :ok
          end

        else
          render json: { error: 'User not found' }, status: :not_found
        end
      end

      private

      def search_params
        params.permit(:user_id, :page, :q, :type, :language, :sort)
      end

      def search_repos(user_id)
        # Get sort hash
        sort = case search_params[:sort]
               when 'updated'
                 { last_updated: :desc }
               when 'name'
                 { name: :asc }
               when 'stars'
                 { stars: :desc }
               else
                 { _score: :desc }
               end

        # Create filter hash
        where = { user_id: user_id }
        if search_params[:language].present?
          where[:language] = search_params[:language]
        elsif search_params[:type].present?
          case search_params[:type]
          when 'fork'
            where[:fork] = true
          when 'archived'
            where[:archived] = true
          when 'private'
            where[:private] = true
          end
        end

        Repository.search(
          search_params[:q] || '*',
          fields: %i[name description],
          where: where,
          order: sort
        )
      end
    end
  end
end
