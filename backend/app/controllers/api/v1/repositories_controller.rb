# frozen_string_literal: true

module Api
  module V1
    class RepositoriesController < ApplicationController
      before_action :find_user
      before_action :find_repository, only: :show

      def index
        render json: @user.repositories
      end

      def show
        render json: @repository
      end

      private

      def find_user
        @user = User.find_by(login: user_params)
        render json: { message: 'user not found' }, status: :not_found unless @user
      end

      def find_repository
        @repository = Repository.find_by(name: repository_params)
        render json: { message: 'repository not found' }, status: :not_found unless @repository
      end

      def user_params
        params.require(:user_login)
      end

      def repository_params
        params.require(:name)
      end
    end
  end
end
