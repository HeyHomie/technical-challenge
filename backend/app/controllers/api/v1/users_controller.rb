# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def index
        conn = Faraday.new("https://api.github.com") do |f|
          # f.request :authorization, 'Bearer', Figaro.env.GITHUB_TOKEN
          f.request :json # encode req bodies as JSON
          f.request :retry # retry transient failures
          f.response :follow_redirects # follow redirects
          f.response :json # decode response bodies as JSON
        end
        user = conn.get("/users/#{user_params}").body
        db_user = User.find_by(github_id: user['id'])
        return render json: "The user doesn't exist" if user.values.include? "Not Found"
        User.save_data_base(db_user)
        # shows the searched public users.  URL.- http://localhost:3000/api/v1/users?user=serlle
        render json: db_user.as_json
      end

      private

      def user_params
        params[:user].present? ? params[:user] : nil
      end
    end
  end
end
