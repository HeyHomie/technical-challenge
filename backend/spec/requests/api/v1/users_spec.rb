# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Users', type: :request do
  describe 'GET /show' do
    let(:saved_user) { FactoryBot.create :user }

    context '/when user exist in the db' do
      it '/get profile for faker' do
        get api_v1_user_path(id: saved_user.login)
        body = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(body).to have_key('login')
        expect(body['login']).to eq(saved_user.login)
      end
    end

    context '/when is a specific user' do
      it '/gets profile for yknx4' do
        get api_v1_user_path(id: 'yknx4')
        body = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(body).to have_key('login')
        expect(body['login']).to eq('yknx4')
      end

      it '/get profile for HeyHomie' do
        get api_v1_user_path(id: 'HeyHomie')
        body = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(body).to have_key('login')
        expect(body['login']).to eq('heyhomie')
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
