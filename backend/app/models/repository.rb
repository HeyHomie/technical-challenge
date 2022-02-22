class Repository < ApplicationRecord
  belongs_to :user

  validates :repo_id, :name, :full_name, :private, :owner, :html_url, :visibility, :user_id, presence: true

end
