class Repository < ApplicationRecord
  belongs_to :user

  validates :repo_id, :name, :full_name, :html_url, presence: true, uniqueness: true
  validates :owner, :visibility, :user_id, presence: true
  
  searchkick word_middle:[:name]

  def searh_data
    {
      name: name
    }
  end
end