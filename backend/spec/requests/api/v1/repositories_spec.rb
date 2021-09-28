# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Repositories', type: :request do
  describe 'POST /create' do
    it 'creates repositories for yknx4' do
      get api_v1_users_path, params: { username: 'yknx4' }
      user_id = JSON.parse(response.body)['id']

      post api_v1_user_repositories_path(user_id: user_id)
      expect(response).to have_http_status(:created)
    end
  end

  describe 'GET /index' do
    it 'gets empty repositories for yknx4' do
      get api_v1_users_path, params: { username: 'yknx4' }
      user_id = JSON.parse(response.body)['id']
      post api_v1_user_repositories_path(user_id: user_id)

      get api_v1_user_repositories_path(user_id: user_id)
      body = JSON.parse(response.body)

      expect(response).to have_http_status(:ok)
      expect(body['repositories'].size).to eq(5)
    end
  end
end
