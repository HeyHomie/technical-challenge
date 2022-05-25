require 'rails_helper'
require "github_api/client"
include GithubAPI

RSpec.describe Repository, type: :model do
  describe '#sync_repositories' do
    it 'syncs repositories' do
      github_client = GithubAPI::Client.new(ENV['GITHUB_TOKEN'])
      user = github_client.get_user('yknx4')
      repos = github_client.get_user_repos('yknx4', { per_page: 100, sort: 'updated' })

      db_user = User.find_or_create_by(github_id: user['id'])
      db_user.sync_repositories(repos)
      byebug
      expect(db_user.repositories.size).to eq(repos.size)
      expect(db_user.repositories.map(&:github_id).sort).to eq(repos.map { |r| r['id'] }.sort)
    end
  end
end
