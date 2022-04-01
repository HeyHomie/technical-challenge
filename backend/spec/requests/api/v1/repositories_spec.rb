# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Repositories', type: :request do
  describe '#index' do
    context '/when user exist in GitHub API but not in db' do
      it '/should get status 200' do
        get api_v1_user_repositories_path(user_id: 'serlle')
        expect(response).to have_http_status(200)
      end

      it '/should save all the Serlle repos in db' do
        expect { 
          get api_v1_user_repositories_path(user_id: 'serlle')
        }.to change { Repository.count }.by(7)
      end

      it '/should search a repo the user Serlle' do
        get api_v1_user_repositories_path(user_id: 'serlle'), params: { search: 'technical-challenge' }
        expect(response.body['technical-challenge']).to eq('technical-challenge')
      end

      it '/should search a repo with half a word the user Serlle' do
        get api_v1_user_repositories_path(user_id: 'serlle'), params: { search: 'technical' }
        expect(response.body['technical-challenge']).to eq('technical-challenge')
      end

      it '/should save and show all repos the Serlle when keyword is nil' do
        get api_v1_user_repositories_path(user_id: 'serlle'), params: { search: '' }
        body = JSON.parse(response.body)
        expect(body.size).to eq(7)
      end 

      it '/should show page 1 with 10 repos the user HeyHomie' do
        get api_v1_user_repositories_path(user_id: 'heyhomie'), params: { page: 1 }
        body = JSON.parse(response.body)
        expect(body.size).to eq(10)
      end

      it '/should show page 2 with 10 repos the user HeyHomie' do
        get api_v1_user_repositories_path(user_id: 'heyhomie'), params: { page: 2 }
        body = JSON.parse(response.body)
        expect(body.size).to eq(10)
      end
    end 

    context '/when user does not exist in GitHub API and in db' do
      it '/responds with error' do
        get api_v1_user_path(id: 'user_that_does_not_exist')
        expect(response.body.include?('Not Found')).to eq(true)
      end
    end
  end
end
