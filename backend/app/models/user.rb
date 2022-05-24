# frozen_string_literal: true

class User < ApplicationRecord
  has_many :repositories, foreign_key: 'owner_id', class_name: 'Repository',  dependent: :destroy
  validates :login, presence: true
  validates :github_id, presence: true, uniqueness: true

  def self.editable_columns
    [:login, :url, :name, :email, :avatar_url]
  end

  # Sync user's repositories from GitHub API and save to database
  def sync_repositories repos
    # Delete repositories that are not in the list anymore
    self.repositories.where.not(id: repos.map{ |r| r['id'] }).destroy_all

    # Update or create repositories that are in the list
    repos.each do |repo|
      self.repositories.find_or_create_by(github_id: repo['id']) do |r|
        r.update repo.keep_if { |k, _v| Repository.editable_columns.include? k.to_sym }
      end
    end
  end

end
