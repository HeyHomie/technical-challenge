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
        repos = conn.get("/user/repos?user=#{user_params}", { per_page: 100 }).body

        db_user = User.all.find { |u| u.github_id == user['id'] }
        repos.each do |repo|
          db_repos = Repository.all.find { |r| r.repo_id == repo["id"] } 
          if db_user.nil? && db_repos.nil?
            db_user = User.create({ github_id: user['id'], login: user['login'], url: user['html_url'], name: user['name'], email: user['email'], avatar_url: user['avatar_url'] })  
            db_repos = db_user.repositories.build({ repo_id: repo['id'], name: repo['name'], full_name: repo['full_name'], private: repo['private'], owner: repo['owner'], html_url: repo['html_url'], visibility: repo['visibility'] })
            db_repos.save
          elsif db_repos.nil?
            db_repos = db_user.repositories.build({ repo_id: repo['id'], name: repo['name'], full_name: repo['full_name'], private: repo['private'], owner: repo['owner'], html_url: repo['html_url'], visibility: repo['visibility'] })
            db_repos.save
          end
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
