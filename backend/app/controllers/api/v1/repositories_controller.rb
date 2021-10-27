# frozen_string_literal: true

module Api
  module V1
    class RepositoriesController < ApplicationController
      def index
        user = User.find_or_fetch_from_github(login: user_params)
        search_hash = search_params['search']
        if search_hash.present?
          fields = JSON.parse(search_hash['fields'])
          repos = Repo.search(search_hash['query'], fields: fields, where: { user_id: user.id })
        else
          repos = Repo.search(where: { user_id: user.id })
        end

        render json: repos.results
      rescue User::NoUserFound
        render json: nil, status: :not_found
      end

      private

      def user_params
        params.require(:user_id)
      end

      def search_params
        params.permit(
          search: [
            :query,
            {
              fields: []
            }
          ]
        )
      end
    end
  end
end
