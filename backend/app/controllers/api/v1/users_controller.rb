# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all

        render json: users.as_json.each { |usr| usr.delete('repositories') }
      end

      def show
        user = User.find_or_fetch_from_github(login: user_params)
        render json: user.as_json.except(:repositories)
      rescue User::NoUserFound
        render json: nil, status: :not_found
      end

      private

      def user_params
        params.require(:id)
      end
    end
  end
end
