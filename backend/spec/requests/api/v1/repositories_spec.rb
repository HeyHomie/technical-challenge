# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Repositories', type: :request do
  describe 'GET /index' do
    it 'gets repositories for yknx4' do
      user = create(:user, login: 'dhh')
      create(:repo, name: 'my_super_awesome_repo', user_id: user.id)
      create(:repo, name: 'second', user_id: user.id)
      stub_github_methods_for user.login
      Repo.reindex

      get api_v1_user_repositories_path(user_id: user.login)

      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body.size).to eq(2)
    end

    it 'searches with custom params' do
      user = create(:user, login: 'dhh')
      create(:repo, name: 'my_super_awesome_repo', user_id: user.id)
      create(:repo, name: 'second', user_id: user.id)
      stub_github_methods_for user.login
      Repo.reindex

      get api_v1_user_repositories_path(
        user_id: user.login,
        search: {
          query: 'my_super_awesome_repo',
          fields: ['name']
        }
      )

      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body.size).to eq(1)
    end
  end
end
