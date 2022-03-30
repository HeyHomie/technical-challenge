# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      before_action :set_user

      def show
        db_user = UserFinder.call(user_params)
        render json: db_user.body.as_json
      end

      private

      def set_user
        user = User.find_by(login: user_params.downcase)
        render json: user.as_json if user
      end

      def user_params
        params.require(:id) #id = user name
      end
    end
  end
end
