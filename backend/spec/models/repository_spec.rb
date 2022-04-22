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
require 'rails_helper'

RSpec.describe Repository, type: :model do
  subject(:repository) { create(:repository) }

  it { expect(subject).to be_valid }
  it { is_expected.to validate_presence_of(:user_id) }
  it { is_expected.to validate_uniqueness_of(:id) }
end
