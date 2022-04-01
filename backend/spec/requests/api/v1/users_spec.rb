# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Users', type: :request do
  describe '#show' do
    let(:saved_user) { FactoryBot.create :user }

    context '/when user exist in the db' do
      it '/should get profile the db faker' do
        get api_v1_user_path(id: saved_user.login)
        body = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(body['login']).to eq(saved_user.login)
      end
    end

    context '/when user exist in GitHub API but not db' do
      it '/should get status 200' do
        get api_v1_user_path(id: 'serlle')
        expect(response).to have_http_status(200)
      end

      it '/should save profile yknx4 in db' do
        expect { 
          get api_v1_user_path(id: 'yknx4')
        }.to change { Repository.count }.by(100)
      end

      it '/should save profile HeyHomie in db' do
        expect { 
          get api_v1_user_path(id: 'HeyHomie')
        }.to change { Repository.count }.by(20)
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
