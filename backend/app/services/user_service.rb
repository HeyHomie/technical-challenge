# frozen_string_literal: true

class UserService
  attr_reader :login
  attr_accessor :user

  def initialize(login)
    @login = login
    @user = user
  end

  def call
    response = GithubService.new(login).call
    if response.status == 200 && defined?(response.body['login'])
      user = create_user(response.body)
      ResponseService.new(200, user).call
    else
      ResponseService.new(response.status, response.body).call
    end
  end

  private

  def create_user(data)
    user = User.new(user_params(data))
    if user.save
      RepositoryService.new(user).call
    else
      ResponseService.new(404, { message: 'cant save user' }).call
    end
  end

  def user_params(user)
    { github_id: user['id'], login: user['login'], url: user['html_url'],
      name: user['name'], email: user['email'], avatar_url: user['avatar_url'] }
  end
end
