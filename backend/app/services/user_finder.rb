class UserFinder < ApplicationService
  def initialize(username)
    @username = username
  end

  def call
    service = GithubService.new(@username)
    @found_user = service.search_user
    @found_user.success? ? create_user : nonexistent_user
  end

  private

  def create_user
    user = User.new(user_params)
		if user.save
      OpenStruct.new(status: @found_user.status, body: user)
		else
			user.errors.full_messages
		end
  end

  def nonexistent_user
    OpenStruct.new(status: @found_user.status, body: @found_user.body)
  end

  def user_params
    response = @found_user.body
    { github_id: response['id'], login: response['login'], url: response['html_url'], 
    name: response['name'], email: response['email'], avatar_url: response['avatar_url'] }
  end
end