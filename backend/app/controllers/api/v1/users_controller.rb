# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def index
        conn = create_faraday_connection
        user = conn.get("https://api.github.com/user?user=#{user_params}").body
        db_user = User.all.find { |u| u.github_id == user['id'] }
        if db_user.nil?
          db_user = User.create({ github_id: user['id'], login: user['login'], url: user['html_url'], name: user['name'],
                                  email: user['email'], avatar_url: user['avatar_url']})
        end
        render json: db_user.as_json
      end

      private

      def user_params
        params.require(:username)
      end
    end
  end
end
