# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def index
        status_code = 200
        github_import = get_github_service

        github_import.import
        status_code = 404 unless github_import.success?

        render json: github_import.result, status: status_code
      end

      private
      def get_github_service
        Services::GithubImportUser.new(username: user_params, test: params[:test])
      end

      def user_params
        params.require(:username)
      end
    end
  end
end
