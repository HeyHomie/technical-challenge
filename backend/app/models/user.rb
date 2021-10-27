# frozen_string_literal: true

class User < ApplicationRecord

  validates :login, :url, :name, :avatar_url, presence: true
end
