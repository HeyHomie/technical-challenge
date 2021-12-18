# frozen_string_literal: true

class User < ApplicationRecord
  validates_presence_of :login, :name

  has_many :repositories
end
