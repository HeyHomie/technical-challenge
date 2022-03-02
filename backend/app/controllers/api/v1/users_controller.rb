# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      before_action :find_user

      def show
        render json: 'user not found', status: :not_found
      end

      def create
        @conn = Faraday.new do |f|
          f.request :authorization, 'Bearer', Figaro.env.GITHUB_TOKEN
          f.request :json # encode req bodies as JSON
          f.request :retry # retry transient failures
          f.response :follow_redirects # follow redirects
          f.response :json # decode response bodies as JSON
        end
        response = @conn.get("https://api.github.com/users/#{params[:login]}")
        if response.status == 200
          user = response.body
          @user = User.new(github_id: user['id'], login: user['login'], url: user['html_url'],
                           name: user['name'], email: user['email'], avatar_url: user['avatar_url'])
          if @user.save
            create_repositories
            render json: @user
          else
            render json: @user.errors.full_messages, status: :not_found
          end
        else
          render json: 'user not found', status: :not_found
        end
      end

      private

      def find_user
        @user = User.where(login: params[:login]).or(User.where(id: params[:id])).last
        render json: @user if @user
      end

      def create_repositories
        repos = @conn.get("https://api.github.com/users/#{params[:login]}/repos",
                          { per_page: 100 }).body
        repos.each do |a|
          @user.repositories.create(name: a['name'])
        end
      end

      def user_params
        params.permit(:login, :id)
      end
    end
  end
end
