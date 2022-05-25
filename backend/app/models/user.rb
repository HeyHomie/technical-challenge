# frozen_string_literal: true

class User < ApplicationRecord
  has_many :repositories, foreign_key: 'owner_id', class_name: 'Repository',  dependent: :destroy
  validates :login, uniqueness: true, allow_nil: true
  validates :github_id, uniqueness: true, allow_nil: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true, allow_nil: true

  has_secure_password

  before_validation :validate_email_password_pair, on: :create

  def self.editable_columns
    [:login, :url, :name, :email, :avatar_url]
  end

  def validate_email_password_pair
    # handle the case when create user with email and password, but email is empty
    if password.present? and email.blank?
      errors.add(:email, 'is required')
      return
    end

    # handle the case when user is created as github user without password
    if password.blank?
      password = SecureRandom.hex(8) # generate random password
      self.password = password
    end
  end

  # Sync user's repositories from GitHub API and save to database
  def sync_repositories repos
    # Delete repositories that are not in the list anymore
    self.repositories.where.not(github_id: repos.map{ |r| r['id'] }).destroy_all

    # Update or create repositories that are in the list
    repos.each do |repo|
      self.repositories.find_or_create_by(github_id: repo['id']) do |r|
        r.update repo.clone.keep_if { |k, _v| Repository.editable_columns.include? k.to_sym }
      end
    end
  end

end
