# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Users', type: :request do
  describe 'GET /index' do
    it 'gets profile for serlle' do
      get api_v1_users_path, params: { user: 'Serlle' }
      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body).to have_key('login')
      expect(body['login']).to eq('Serlle')
    end

    it 'get profile for HeyHomie' do
      get api_v1_users_path, params: { user: 'HeyHomie' }
      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body).to have_key('login')
      expect(body['login']).to eq('HeyHomie')
    end
  end

  describe 'GET /error' do
    it 'get the user doesn`t exist' do
      get api_v1_user_repositories_path(user_id: 'user_that_does_not_exist')
      expect(response).to have_http_status(200)
      expect(response.body).to eq("The user does not exist or a problem occurred")
    end
  end

end
