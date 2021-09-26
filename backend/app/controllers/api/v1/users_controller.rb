# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def index
        user = User.find_by(login: user_params)
        if user.present?
          render json: user, status: :ok
        else
          get_user_from_github
        end
      end

      private

      def user_params
        params.require(:username)
      end

      def get_user_from_github
        conn = create_faraday_connection
        response = conn.get("https://api.github.com/user?user=#{user_params}")

        if response.status == 200
          gh_user = User.create({ 
            github_id: response.body['id'], 
            login: response.body['login'], 
            url: response.body['html_url'], 
            name: response.body['name'],
            email: response.body['email'], 
            avatar_url: response.body['avatar_url']
          })
          render json: gh_user, status: :ok
        else
          render json: { error: "Error (#{response.status}) trying to get user data from GitHub: #{response.body['message']} " }, status: response.status
        end
      end
    end
  end
end
