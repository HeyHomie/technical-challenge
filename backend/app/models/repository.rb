class Repository < ApplicationRecord
  searchkick word_middle: [:name, :description]
  belongs_to :owner, class_name: 'User', foreign_key: 'owner_id'
  validates :name, presence: true
  validates :github_id, presence: true, uniqueness: true

  def self.editable_columns
    [:name, :url, :git_url, :fork, :description, :visibility, :private, :ssh_url, :contents_url]
  end
end
