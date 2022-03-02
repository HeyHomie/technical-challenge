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
        @user = User.find(user_params)
        render json: 'data not found', status: :not_found unless @user
      end

      def find_repository
        @repository = Repository.find_by(name: repository_params)
        puts @repository
      end

      def user_params
        params.require(:user_id)
      end

      def repository_params
        params.require(:name)
      end
    end
  end
end
