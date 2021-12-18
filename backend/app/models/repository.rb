class Repository < ApplicationRecord
  validates :name, presence: true, uniqueness: { scope: :user_id }
  belongs_to :user

  self.per_page = 10
end
