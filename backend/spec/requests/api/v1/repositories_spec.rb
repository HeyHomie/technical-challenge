# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Repositories', type: :request do
  describe 'GET /index' do
    it 'gets repositories for yknx4' do
      user_name = 'yknx4'
      stub_github_methods_for user_name
      get api_v1_user_repositories_path(user_id: user_name)
      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body.size).to eq(2)
    end
  end
end
