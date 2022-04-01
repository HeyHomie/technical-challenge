class RepositoriesAll < ApplicationService
  def initialize(username)
    @username = username
  end

  def call
    service = GithubService.new(@username)
    @found_repos = service.search_repos
    @repos_body = @found_repos.body
    @found_repos.success? ? create_repos : nonexistent_user
  end

  private

  def create_repos
    @repos_body.each do |repo|
      get_user.repositories.create(repos_params(repo))
    end
    OpenStruct.new(status: @found_repos.status, body: get_user.repositories)
  end

  def nonexistent_user
    OpenStruct.new(status: @found_repos.status, body: @repos_body)
  end

  def get_user
    @user = User.find_by(login: @username.downcase)
    if @user
      @user
    else
      user = UserFinder.call(@username)
      return user.body
    end
  end

  def repos_params(repo)
    { repo_id: repo['id'], name: repo['name'], full_name: repo['full_name'], private: repo['private'],
      owner: repo['owner'], html_url: repo['html_url'], visibility: repo['visibility'] }
  end
end