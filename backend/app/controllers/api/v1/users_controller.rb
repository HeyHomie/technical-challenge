# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def index
        conn = Faraday.new("https://api.github.com") do |f|
          f.request :authorization, 'Bearer', Figaro.env.GITHUB_TOKEN
          f.request :json # encode req bodies as JSON
          f.request :retry # retry transient failures
          f.response :follow_redirects # follow redirects
          f.response :json # decode response bodies as JSON
        end
        user = conn.get("/user?user=#{user_params}").body

        db_user = User.all.find { |u| u.github_id == user['id'] }
        if db_user.nil?
          db_user = User.create({ github_id: user['id'], login: user['login'], url: user['html_url'], name: user['name'],
                                  email: user['email'], avatar_url: user['avatar_url'] })
        end
        render json: db_user.as_json
      end

      private

      def user_params
        params.require(:action)
      end
    end
  end
end
