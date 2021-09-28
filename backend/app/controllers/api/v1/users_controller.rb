# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def index
        user = User.find_by(login: user_params)
        if user.present?
          render json: user, status: :ok
        else
          response = GithubUsersService.new.create_user(user_params)
          render json: response[:message], status: response[:status]
        end
      end

      private

      def user_params
        params.require(:username)
      end
    end
  end
end
