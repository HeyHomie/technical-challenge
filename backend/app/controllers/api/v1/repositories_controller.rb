# frozen_string_literal: true

module Api
  module V1
    class RepositoriesController < ApplicationController
      ALLOWED_FIELDS = %w[id url name size private language]
      before_action :user

      def index
        repositories = user.repositories.as_json(only: ALLOWED_FIELDS)

        if params[:page].present?
          @pagy, paginated_repositories = pagy(repositories)
          render json: paginated_repositories
        else
          render json: repositories
        end
      end

      private

      def user
        @user ||= User.find_by!(login: params[:user_id])
      end

      def unprocessable_entity
        render json: { errors: @user.errors }, status: __method__
      end
    end
  end
end
