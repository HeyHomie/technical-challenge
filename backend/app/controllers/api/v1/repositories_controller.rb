# frozen_string_literal: true

module Api
  module V1
    class RepositoriesController < ApplicationController
      def index
        service = ::V1::Repositories::List.new(search_param: search_param, username: username)
        render json: service.search_repo
      end

      private

      def repository_params
        params.require(:search_param)
      end

      def search_param
        params[:search_param]
      end

      def username
        params[:username] || nil
      end
    end
  end
end
