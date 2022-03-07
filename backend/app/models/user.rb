# frozen_string_literal: true

class User < ApplicationRecord
  has_many :repositories

  validates :github_id, presence: true, uniqueness: true, numericality: { only_integer: true }
  validates :login, :url, :avatar_url, presence: true, uniqueness: true
  validates :name, presence: true, uniqueness: true, length: { minimum: 3, maximum: 25 }
  # Email format is with a regular expression.
  # VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  # validates :email, presence: true, 
                    # uniqueness: { case_sensitive: false },
                    # length: { maximum: 105 },
                    # format: { with: VALID_EMAIL_REGEX }

  def self.save_data_base(db_user)
    if db_user.nil?
      db_user = User.create({ github_id: user['id'], login: user['login'], url: user['html_url'], name: user['name'],
                              email: user['email'], avatar_url: user['avatar_url'] })
    end
  end

end
