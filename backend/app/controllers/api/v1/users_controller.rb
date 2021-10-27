# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def show
        github_user = ::Github::FetchUserService.new(params: params[:id]).execute!
        @user = User.find_by(github_id: github_user['id']) || User.new

        if @user.new_record?
          service = Users::CreateService.new(user: @user, params: github_user)
          service.execute!
        end

        render json: @user, except: :repositories
      end

      def unprocessable_entity
        render json: { errors: @user.errors }, status: __method__
      end
    end
  end
end
