# frozen_string_literal: true
module Api
  module V1
    class RepositoriesController < ApplicationController
      before_action :set_specific_repo, :set_repos

      def index
        @db_repos = RepositoriesAll.call(user_params, @get_user_db)
        set_specific_repo
        render json: @db_repos.body.page(params[:page]).per(10).as_json unless @keyword
      end

      private

      def set_specific_repo
        @get_user_db = User.find_by(login: user_params.downcase)
        @get_repos_db = @get_user_db.repositories if @get_user_db
        @keyword = params[:search].present? ? params[:search] : nil
        unless @get_repos_db.blank?
          if @keyword 
            Repository.reindex
            found_repo = Repository.search @keyword, where: { user_id: @get_user_db.id }
            render json: found_repo.as_json
          end
        end
      end

      def set_repos
        render json: @get_repos_db.page(params[:page]).per(10).as_json unless @get_repos_db.blank?
      end

      def user_params
        params.require(:user_id)
      end
    end
  end
end
