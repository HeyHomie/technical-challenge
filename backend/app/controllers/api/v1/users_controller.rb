# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def index
        if params.key?(:username)
          redirect_to api_v1_user_path(username: user_params)
        elsif User.any?
          render json: User.all.as_json
        end
      end

      def new; end

      def create
        user = find_github_user(user_params)
        if User.exists?(login: user.login)
          render json: { message: 'User cannot be added' }
        else
          create_user(user)
          render json: { message: "User #{user['login']} was added successfully" }
        end
      rescue StandardError => e
        render json: e.message
      end

      def show
        if User.exists?(login: user_params)
          render json: User.find_by(login: user_params).as_json
        else
          render json: { message: "The user doesn't exist" }
        end
      end

      def query
        if User.search(search_params).any?
          render json: User.search(search_params)
          # render json: { message: "HOlaaaa con params: #{search_params}" }
        else
          render json: { message: 'No results' }
        end
      end

      def destroy
        if User.exists?(login: user_params)
          User.find(login: user_params).delete
          render json: { message: 'The user has been deleted' }
        else
          render json: { message: "The user doesn't exist" }
        end
      end

      private

      def user_params
        params.require(:username)
      end

      def search_params
        params.require(:find)
      end

      def find_github_user(username)
        Github_gem.user username
      end

      def create_user(github_user)
        github_data = Github_gem.user github_user['login']
        user = User.create({ github_id: github_data.id,
                             login: github_data.login,
                             url: github_data.url,
                             name: github_data.name,
                             avatar_url: github_data.avatar_url })
        UserRepositoriesWorker.perform_async(user.id, github_data.login)
      end
    end
  end
end
