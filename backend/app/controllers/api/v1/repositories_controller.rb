# frozen_string_literal: true

module Api
  module V1
    class RepositoriesController < ApplicationController
      def index
        user = User.find_or_fetch_from_github(login: user_params)
        search_hash = search_params['search']
        repos = if search_hash.present?
                  Repo.search(
                    search_hash['query'],
                    fields: JSON.parse(search_hash['fields']),
                    where: { user_id: user.id }
                  )
                else
                  Repo.search(where: { user_id: user.id })
                end
        response = RepositorySerializer.new(repos).serializable_hash.to_json

        render json: response
      end

      rescue_from User::NoUserFound do |error|
        render json: { error: { message: error.message } }, status: :not_found
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
