# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all
        response = UserSerializer.new(users).serializable_hash.to_json
        render json: response
      end

      def show
        user = User.find_or_fetch_from_github(login: user_params)
        response = UserSerializer.new(user).serializable_hash.to_json
        render json: response
      end

      rescue_from User::NoUserFound do |error|
        # TODO: Serialize Errors in a global rescue
        render json: { error: { message: error.message } }, status: :not_found
      end

      private

      def user_params
        params.require(:id)
      end
    end
  end
end
