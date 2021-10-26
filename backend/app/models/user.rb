# frozen_string_literal: true

class User < ApplicationRecord
  NoUserFound = Class.new(StandardError)

  validates :login, uniqueness: true
  validates :github_id, uniqueness: true, allow_nil: true

  def self.find_or_fetch_from_github(login:)
    user = find_or_create_by!(login: login)
    user.refresh_data! if user.github_id.blank?
    user.refresh_repos_data! if user.repositories.blank?
    user
  rescue ::Github::Users::UnableToFetchUser
    raise NoUserFound
  end

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
