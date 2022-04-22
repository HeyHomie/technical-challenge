# == Schema Information
#
# Table name: repositories
#
#  id               :bigint           not null, primary key
#  clone_url        :string
#  contributors_url :string
#  description      :text
#  forks_count      :integer
#  forks_url        :string
#  full_name        :string
#  html_url         :string
#  language         :string
#  languages_url    :string
#  license          :string
#  name             :string
#  private          :boolean
#  ssh_url          :string
#  stargazers_count :integer
#  stargazers_url   :string
#  subscribers_url  :string
#  subscription_url :string
#  topics           :string           is an Array
#  visibility       :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  node_id          :string
#  user_id          :bigint           not null
#
# Indexes
#
#  index_repositories_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Repository < ApplicationRecord
  belongs_to :user
  after_commit :searchkick_indexing
  searchkick word_start: %i[id name full_name html_url]

  validates :id, presence: true, uniqueness: true
  validates :user_id, presence: true

  def search_data
    {
      id: id,
      name: name,
      full_name: full_name,
      html_url: html_url,
      user_id: user_id
    }
  end

  private

  def searchkick_indexing
    self.reindex
  end
end
