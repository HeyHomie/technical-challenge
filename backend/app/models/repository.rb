require 'json'
class Repository < ApplicationRecord
  belongs_to :user

  validates :repo_id, presence: true, uniqueness: true, numericality: { only_integer: true }
  validates :full_name, :html_url, presence: true, uniqueness: true
  validates :user_id, presence: true, numericality: { only_integer: true }
  validates :name, :owner, :visibility, presence: true
  
  searchkick word_middle:[:name]

  def self.save_data_base(db_user, db_repo, user, repo)
    if db_user.nil? && db_repo.nil?
      db_user = User.create({ github_id: user['id'], login: user['login'], url: user['html_url'], 
                              name: user['name'], email: user['email'], avatar_url: user['avatar_url'] })  

      db_repo = db_user.repositories.build({ repo_id: repo['id'], name: repo['name'], full_name: repo['full_name'],
                                              private: repo['private'], owner: repo['owner'], 
                                              html_url: repo['html_url'], visibility: repo['visibility'] })
      db_repo.save
    elsif db_repo.nil?
      db_repo = db_user.repositories.build({ repo_id: repo['id'], name: repo['name'], full_name: repo['full_name'],
                                              private: repo['private'], owner: repo['owner'], 
                                              html_url: repo['html_url'], visibility: repo['visibility'] })
      db_repo.save
    end
  end

  def searh_data
    {
      name: name
    }
  end
end