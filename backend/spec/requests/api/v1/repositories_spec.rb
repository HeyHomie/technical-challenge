# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Repositories', type: :request do
  let(:github_user) { create(:user) }
  let(:repository_user) { create(:repository, user_id: github_user.id) }

  describe 'GET /index' do
    it 'get all repositories for user' do
      get api_v1_user_repositories_path(user_username: github_user.login)
      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body.size).to eq(github_user.repositories.count) unless body['message']
    end
    it 'get specific repository' do
      get api_v1_user_repository_path(id: repository_user.id, user_username: github_user.login)
      expect(response).to have_http_status(200)
    end
  end
end
