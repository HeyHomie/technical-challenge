# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def index
        conn = Faraday.new('https://api.github.com') do |f|
          f.headers[:Authorization] = "token=#{ENV['GITHUB_TOKEN']}" if ENV['GITHUB_TOKEN'] # set auth header if token exists
          f.request :json # encode req bodies as JSON
          f.request :retry # retry transient failures
          f.response :follow_redirects # follow redirects
          f.response :json # decode response bodies as JSON
        end

        user = conn.get("/users/#{user_params}").body
        repos = conn.get("/users/#{user_params}/repos", { per_page: 100 }).body

        db_user = User.find_or_create_by(github_id: user['id'])
        db_user.update(user.clone.keep_if { |k, _v| User.editable_columns.include? k.to_sym })
        db_user.sync_repositories(repos)

        render json: db_user.as_json.except('repositories')
      end

      private

      def user_params
        params.require(:username)
      end
    end
  end
end
