# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Repositories', type: :request do
  let!(:saved_user) { create(:user, :fake_user) }

  describe 'GET /show' do
    before do
      @saved_repository = create(:repository, user_id: saved_user.id)
    end
    it 'gets specify repository' do
      get api_v1_user_repository_path(saved_user.login, name: @saved_repository.name)
      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body['name']).to eq(@saved_repository.name)
    end
  end

  describe 'GET /index' do
    before do
      @repos = create_list(:repository, 10, user_id: saved_user.id)
    end
    it 'gets repositories for random user' do
      get api_v1_user_repositories_path(user_login: saved_user.login)
      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body.count).to eq(10)
    end
  end
end
