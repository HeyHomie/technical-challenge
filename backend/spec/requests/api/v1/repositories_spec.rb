# frozen_string_literal: true

require 'rails_helper'

include Authentication


RSpec.describe 'Api::V1::Repositories', type: :request do
  before(:each) do
    registered_user = FactoryBot.create(:registered_user)
    user = create(:registered_user)
    user.save

    login registered_user.email, registered_user.password
  end

  describe 'GET /index' do

    it 'gets repositories for yknx4' do
      get api_v1_repositories_path, params: {username: 'yknx4'}, headers: @headers
      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body.size).to eq(100)
    end

    it 'gets repositories for HeyHomie and filter technical-challenge' do
      get api_v1_repositories_path, params: {username: 'HeyHomie', filter: 'challenge'}, headers: @headers
      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body.size).to eq(1)
      expect(body.first['name']).to eq('technical-challenge')
    end

    it 'get error for invalid user' do
      get api_v1_users_path, params: { username: 'c1a4e3s3xt3e0' }, headers: @headers
      body = JSON.parse(response.body)
      expect(response).to have_http_status(404)
      expect(body).to have_key('message')
      expect(body['message']).to eq('Not Found')
    end
  end
end
