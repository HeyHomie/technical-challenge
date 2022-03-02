# frozen_string_literal: true

class User < ApplicationRecord
  has_many :repositories, dependent: :destroy

  validates :login, :url, :github_id, :name, :email, :avatar_url, presence: true
end
