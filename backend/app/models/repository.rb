# frozen_string_literal: true

class Repository < ApplicationRecord
  belongs_to :user

  validates :name, :github_updated, :github_id, :url, presence: true
end
