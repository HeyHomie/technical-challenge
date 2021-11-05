# frozen_string_literal: true

module Api
  module V1
    class RepositoriesController < ApplicationController
      def index
        if Repository.any?
          render json: User.find_by(login: params[:user_username]).repositories
        else
          render json: { message: "This user doesn't have repositories" }
        end
      end

      def show
        if Repository.exists?(id: repository_params)
          render json: Repository.find(repository_params)
        else
          render json: { message: "This repositoriy doesn't exist" }
        end
      end

      private

      def user_params
        params.require(:user_id)
      end

      def repository_params
        params.require(:id)
      end
    end
  end
end
