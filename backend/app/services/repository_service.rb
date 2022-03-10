# frozen_string_literal: true

class RepositoryService
  attr_reader :user

  def initialize(user)
    @user = user
  end

  def call
    path = "#{user.login}/repos"
    repos = GithubService.new(path).call
    create_repositories(repos.body) if repos.status == 200 && defined?(repos.body['login'])
  end

  private

  def create_repositories(repos)
    repos.each do |repo|
      user.repositories.create(repo_params(repo))
    end
    user
  end

  def repo_params(repo)
    { name: repo['name'], language: repo['language'], github_updated: repo['updated_at'],
      github_id: repo['id'], description: repo['description'], url: repo['url'] }
  end
end
