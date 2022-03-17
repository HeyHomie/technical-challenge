# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Repositories', type: :request do
  describe 'GET /index without pagination' do
    it 'gets all repositories the Serlle' do
      get api_v1_user_repositories_path(user_id: 'serlle')
      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body.size).to eq(7)
    end

    it 'gets search a repository in the user Serlle' do
      get api_v1_user_repositories_path(user_id: 'serlle'), params: { keyword: 'technical-challenge' }
      expect(response).to have_http_status(200)
      expect(response.body['technical-challenge']).to eq('technical-challenge')
    end

    it 'gets search a repo with half a word in the user Serlle' do
      get api_v1_user_repositories_path(user_id: 'serlle'), params: { keyword: 'technical' }
      expect(response).to have_http_status(200)
      expect(response.body['technical-challenge']).to eq('technical-challenge')
    end

    it 'show all repositories the user Serlle if keyword is nil' do
      get api_v1_user_repositories_path(user_id: 'serlle'), params: { keyword: '' }
      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body.size).to eq(7)
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
