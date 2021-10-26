# frozen_string_literal: true

module Api
  module V1
    class RepositoriesController < ApplicationController
      ALLOWED_FIELDS = %w[id url name size private language]
      before_action :user

      def index
        render json: user.repositories.as_json(only: ALLOWED_FIELDS)
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
