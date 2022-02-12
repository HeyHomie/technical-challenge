# frozen_string_literal: true

class Api::V1::RepositoriesController < Api::V1::BaseController
  before_action :find_user
  before_action :find_repository, only: %i[show]
  before_action :find_repositories, only: %i[index]

  def show
    @repository
  end

  def index
    @repositories
  end

  private

  def user_params
    params.require(:user_id)
  end

  def repository_params
    params.require(:name)
  end

  def find_user
    @user = User.find_by(id: user_params.to_i)
  end

  def find_repositories
    @repositories = @user&.repositories
  end

  def find_repository
    @repository = @user&.repositories&.find_by(name: repository_params)
  end
end
