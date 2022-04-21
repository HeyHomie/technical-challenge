# frozen_string_literal: true

module Api
  module V1
    # UsersController class for user search and save
    class UsersController < ApplicationController
      def index
        user_service = ::V1::Users::Create.new(username: username)
        render json: user_service.user
      end

      private

      def user_params
        params.permit(:username)
      end

      def username
        user_params[:username]
      end
    end
  end
end
