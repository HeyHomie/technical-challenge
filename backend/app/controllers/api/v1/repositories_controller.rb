# frozen_string_literal: true

module Api
  module V1
    class RepositoriesController < ApplicationController
      def index
        status_code = 200
        github_fetch_service = get_service

        github_fetch_service.fetch_all_repos

        status_code = 500 unless github_fetch_service.success?
        status_code = 404 if status_code == 200 && github_fetch_service.repositories.blank?

        render json: github_fetch_service.repositories, status: status_code
      end

      def show
        status_code = 200
        github_fetch_service = get_service

        repository = github_fetch_service.get_repo(search_params[:id])

        status_code = 500 unless github_fetch_service.success?
        status_code = 404 if status_code == 200 && repository.blank?

        render json: repository, status: status_code
      end

      private
      def get_service
        Services::GithubRepoFetch.new(search_params.merge(test: params[:test]))
      end

      def search_params
        params.permit(:user_id, :id)
      end
    end
  end
end
