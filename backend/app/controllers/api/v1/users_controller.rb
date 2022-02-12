# frozen_string_literal: true

class Api::V1::UsersController < Api::V1::BaseController
  before_action :find_user

  def show
    return @user if @user

    response = Users::Create.run(params[:id])
    return response_error message: response.error_message unless response.success?

    @user = response.object
  end

  private

  def find_user
    @user = User.find_by(login: params[:id])
  end
end
