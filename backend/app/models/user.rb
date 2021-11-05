# frozen_string_literal: true

class User < ApplicationRecord
  searchkick
  has_many :repositories, dependent: :destroy
  validates :github_id, :login, :url, :avatar_url, presence: true
  validates :id, :github_id, :login, uniqueness: true
end
