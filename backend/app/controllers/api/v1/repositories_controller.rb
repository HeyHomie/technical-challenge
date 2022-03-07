# frozen_string_literal: true
module Api
  module V1
    class RepositoriesController < ApplicationController
      def index
        conn = Faraday.new("https://api.github.com") do |f|
          #f.request :authorization, 'Bearer', Figaro.env.GITHUB_TOKEN
          f.request :json # encode req bodies as JSON
          f.request :retry # retry transient failures
          f.response :follow_redirects # follow redirects
          f.response :json # decode response bodies as JSON
        end
        user = conn.get("/users/#{user_params}").body
        repos = conn.get("/users/#{user_params}/repos", { per_page: 100, sort: 'updated' }).body

        db_user = User.find_by(github_id: user['id'])
        repos.each do |repo|
          return render json: "The user doesn't exist" if repos.include? "message"
          db_repo = Repository.find_by(repo_id: repo['id'])
          Repository.save_data_base(db_user, db_repo, user, repo)
        end
        # search repo ----> URL.- http://localhost:3000/api/v1/users/NameTheUser/repositories?keyword=NameTheRepo
        search = params[:keyword].present? ? params[:keyword] : nil
        if search
          Repository.reindex
          repo_found = Repository.search search, where: { user_id: db_user.id }
          return render json: repo_found.as_json
        end
        # shows all repositories
        return render json: "The user doesn't exist" if db_user.nil?
        return render json: db_user.repositories.as_json if db_user
      end

      private

      def user_params
        params.require(:user_id)
      end
    end
  end
end
