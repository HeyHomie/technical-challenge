# frozen_string_literal: true
module Api
  module V1
    class RepositoriesController < ApplicationController
      before_action :set_specific_repo, :set_repos

      def index
        repos = RepositoriesAll.call(user_params)
        set_specific_repo
        render json: repos.body.page(params[:page]).per(10).as_json unless @keyword
      end

      private

      def set_specific_repo
        @user = User.find_by(login: user_params.downcase)
        @repos = @user.repositories if @user
        @keyword = params[:search].present? ? params[:search] : nil
        unless @repos.blank?
          if @keyword 
            Repository.reindex
            found_repo = Repository.search @keyword, where: { user_id: @user.id }
            render json: found_repo.as_json
          end
        end
      end

      def set_repos
        render json: @repos.page(params[:page]).per(10).as_json unless @repos.blank?
      end

      def user_params
        params.require(:user_id)
      end
    end
  end
end
