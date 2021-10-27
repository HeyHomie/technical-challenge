# frozen_string_literal: true

module Api
  module V1
    class RepositoriesController < ApplicationController
      def index
        user = User.find_or_fetch_from_github(login: user_params)
        fields = JSON.parse(search_params['fields'])
        repos = Repo.search(search_params['query'], fields: fields, where: { user_id: user.id })
        render json: repos.results
      rescue User::NoUserFound
        render json: nil, status: :not_found
      end

      private

      def user_params
        params.require(:user_id)
      end

      def search_params
        params.require(:search)
              .permit(
                :query,
                fields: []
              )
      end
    end
  end
end
