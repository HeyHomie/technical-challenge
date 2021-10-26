# frozen_string_literal: true

module Api
  module V1
    class RepositoriesController < ApplicationController
      def index
        user = User.find_or_fetch_from_github(login: user_params)
        render json: user.repositories
      rescue User::NoUserFound
        render json: nil, status: :not_found
      end

      private

      def user_params
        params.require(:user_id)
      end
    end
  end
end
