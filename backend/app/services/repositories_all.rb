class RepositoriesAll < ApplicationService
  def initialize(username, get_user_db)
    @username = username
    @get_user_db = get_user_db
  end

  def call
    service = GithubService.new(@username)
    @found_repos = service.search_repos
    @repos_body = @found_repos.body
    @found_repos.success? ? create_repos : nonexistent_user
  end

  private

  def create_repos
    if @get_user_db
      @repos_body.each do |repo|
        repo = @get_user_db.repositories.build(repos_params(repo))
        repo.save
      end
      OpenStruct.new(status: @found_repos.status, body: @get_user_db.repositories)
    else
      @user = UserFinder.call(@username)
      @repos_body.each do |repo|
        repo = @user.body.repositories.build(repos_params(repo))
        repo.save
      end
      @get_user_db = User.find_by(login: @username.downcase)
      OpenStruct.new(status: @found_repos.status, body: @get_user_db.repositories)
    end
  end

  def nonexistent_user
    OpenStruct.new(status: @found_repos.status, body: @repos_body)
  end

  def repos_params(repo)
    { repo_id: repo['id'], name: repo['name'], full_name: repo['full_name'], private: repo['private'],
      owner: repo['owner'], html_url: repo['html_url'], visibility: repo['visibility'] }
  end
end