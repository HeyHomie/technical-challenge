# frozen_string_literal: true

class User < ApplicationRecord
  validates :login, uniqueness: true
  validates :github_id, uniqueness: true, allow_nil: true

  def refresh_repos_data
    self.repositories = ::Github::Repos.fetch_from_user(login)
  end

  def refresh_repos_data!
    refresh_repos_data
    save!
  end

  def refresh_data
    data = ::Github::Users.fetch(login)
    self.login = data['login']
    self.github_id = data['id']
    self.url = data['url']
    self.name = data['name']
    self.email = data['email']
    self.avatar_url = data['avatar_url']
  end

  def refresh_data!
    refresh_data
    save!
  end
end
