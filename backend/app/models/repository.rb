# frozen_string_literal: true

class Repository < ApplicationRecord
  searchkick
  belongs_to :user
  validates :user_id, :name, :url, presence: true
  validates :id, :url, :name, uniqueness: true

  def cover_description
    self[:description].presence || 'No description'
  end

  def cover_private
    self[:private].presence || false
  end

  def cover_language
    self[:language].presence || 'No specified'
  end
end
