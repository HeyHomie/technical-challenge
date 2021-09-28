# frozen_string_literal: true

module Api
  module V1
    class RepositoriesController < ApplicationController

      def index
        user = User.find_by(id: search_params[:user_id])
        if user.present?
          repositories = search_repos

          if repositories.empty?
            response = GithubRepositoriesService.new().create_repositories(user)
            if response.message.lenght > 0
              paginated_repos = paginate('repositories', response.message, search_params[:page])
              render json: paginated_repos, status: response.status
            else
              render json: response.message, status: response.status
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

      def user_params
        params.require(:user_id)
      end

      def search_params
        params.permit(:user_id, :page, :q, :type, :language, :sort)
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
    end
  end
end
