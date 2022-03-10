# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      before_action :find_user

      def show
        response = UserService.new(user_params).call
        render json: response.body, status: response.status
      end

      private

      def find_user
        @user = User.find_by(login: user_params)
        render json: @user if @user
      end

      def user_params
        params.require(:login)
      end
    end
  end
end
