# frozen_string_literal: true

class User < ApplicationRecord
  validates :login, uniqueness: true
  validates :github_id, uniqueness: true, allow_nil: true

  def refresh_repos_data
    self.repositories = ::GithubRepos.fetch_from_user(login)
  end

  def refresh_repos_data!
    refresh_repos_data
    save!
  end
end
