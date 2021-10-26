# frozen_string_literal: true

class User < ApplicationRecord

  validates :github_id, :login, :url, :name, :email, :avatar_url, :repositories, presence: true
end
