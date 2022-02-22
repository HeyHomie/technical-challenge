# frozen_string_literal: true

class User < ApplicationRecord
  has_many :repositories

  validates :github_id, :login, :url, :name, :email, :avatar_url, presence: true
end
