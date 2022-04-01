require 'json'
class Repository < ApplicationRecord
  belongs_to :user

  validates :repo_id, presence: true, uniqueness: true, numericality: { only_integer: true }
  validates :full_name, :html_url, presence: true, uniqueness: true
  validates :user_id, presence: true, numericality: { only_integer: true }
  validates :name, :owner, :visibility, presence: true
  
  searchkick word_middle:[:name]

  def searh_data
    {
      name: name
    }
  end
end