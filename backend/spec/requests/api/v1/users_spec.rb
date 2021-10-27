# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Users', type: :request do
  describe 'GET /show' do
    it 'gets profile for yknx4' do
      user_name = 'yknx4'
      stub_github_methods_for user_name
      get api_v1_user_path(user_name)
      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body.dig('data', 'attributes')).to have_key('login')
      expect(body.dig('data', 'attributes', 'login')).to eq('yknx4')
    end
  end
end
