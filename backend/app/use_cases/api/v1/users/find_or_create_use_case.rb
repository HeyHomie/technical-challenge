# frozen_string_literal: true

module Api
  module V1
    module Users
      class FindOrCreateUseCase < ApplicationUseCase
        def initialize(params)
          super()

          @params = params
          @github_user = params[:github_user]
        end

        def call
          response(success: true, payload: find_or_create_user)
        rescue => error
          response(error:)
        end

        private

        attr_reader :params, :github_user

        def find_or_create_user
          user = find_user
          return user unless user.nil?

          create_user
        end

        def find_user
          response = Users::FindService.call(github_id: github_user['id'])
          raise(response.error) unless response.success?

          response.payload
        end

        def create_user
          response = CreateUseCase.call(user: github_user)
          raise(response.error) unless response.success?

          response.payload
        end
      end
    end
  end
end
