# frozen_string_literal: true

class User < ApplicationRecord
  validates :login, :github_id, uniqueness: true
end
