class Repository < ApplicationRecord
  validates_presence_of :name
  belongs_to :user

  self.per_page = 10
end
