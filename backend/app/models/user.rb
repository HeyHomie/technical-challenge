# frozen_string_literal: true

class User < ApplicationRecord
  before_save { self.login = login.downcase }
  has_many :repositories

  validates :github_id, presence: true, uniqueness: true, numericality: { only_integer: true }
  validates :login, :url, :avatar_url, presence: true, uniqueness: true
  validates :name, presence: true, uniqueness: true, length: { minimum: 3, maximum: 35 }
  # Email format is with a regular expression.
  # VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  # validates :email, presence: true, 
                    # uniqueness: { case_sensitive: false },
                    # length: { maximum: 105 },
                    # format: { with: VALID_EMAIL_REGEX }

end
