# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Users', type: :request do
  describe 'GET /index' do
    it 'gets profile for yknx4' do
      user_name = 'yknx4'
      stub_user_response_for user_name
      get api_v1_user_path(user_name)
      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body).to have_key('login')
      expect(body['login']).to eq('yknx4')
    end
  end
end
