# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Repositories', type: :request do
  describe '#index' do
    context '/when show all repositories' do
      it '/get repos the serlle' do
        get api_v1_user_repositories_path(user_id: 'serlle')
        body = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(body.size).to eq(7)
      end
    end 

    context '/when search repo to name' do
      it '/get search a repository in the user Serlle' do
        get api_v1_user_repositories_path(user_id: 'serlle'), params: { search: 'technical-challenge' }
        expect(response).to have_http_status(200)
        expect(response.body['technical-challenge']).to eq('technical-challenge')
      end

      it '/get search a repo with half a word in the user Serlle' do
        get api_v1_user_repositories_path(user_id: 'serlle'), params: { search: 'technical' }
        expect(response).to have_http_status(200)
        expect(response.body['technical-challenge']).to eq('technical-challenge')
      end

      it '/show all repositories the user Serlle if keyword is nil' do
        get api_v1_user_repositories_path(user_id: 'serlle'), params: { search: '' }
        body = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(body.size).to eq(7)
      end   
    end
  end

  describe '#index' do
    context '/when is 10 each pagination' do
      xit '/get page 1 the user HeyHomie' do
        get api_v1_user_repositories_path(user_id: 'heyhomie'), params: { page: 1 }
        body = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(body.size).to eq(10)
      end

      xit '/get page 2 the user HeyHomie' do
        get api_v1_user_repositories_path(user_id: 'heyhomie'), params: { page: 2 }
        body = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(body.size).to eq(10)
      end
    end
  end

  describe 'GET /404 error' do
    it '/when the user does not exist' do
      get api_v1_user_path(id: 'user_that_does_not_exist')
      expect(response.body.include?('Not Found')).to eq(true)
    end
  end
end
