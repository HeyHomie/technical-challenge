# frozen_string_literal: true

class User < ApplicationRecord
  has_many :repositories

  validates :github_id, :login, :url, :avatar_url, presence: true, uniqueness: true
  validates :name, presence: true, uniqueness: true, length: { minimum: 3, maximum: 25 }
  # Email format is with a regular expression.
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, 
                    uniqueness: { case_sensitive: false },
                    length: { maximum: 105 },
                    format: { with: VALID_EMAIL_REGEX }

end
