# frozen_string_literal: true

require 'rails_helper'
require 'sidekiq/testing'
Sidekiq::Testing.fake!

RSpec.describe 'Api::V1::Users', type: :request, vcr: true do
  describe 'GET /index' do
    context 'when the user exist' do
      it 'gets profile for yknx4' do
        get api_v1_users_path, params: { username: 'yknx4' }
        body = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(body).to have_key('username')
      end
    end

    context 'when the user doesnt exist' do
      it 'gets 404 error and a message' do
        get api_v1_users_path, params: { username: 'cquiqbduiqwbqcqw' }
        body = JSON.parse(response.body)
        expect(response).to have_http_status(404)
        expect(body['errors']).not_to be_empty
        expect(body['errors']).to include(I18n.t('models.services.github_import_user.user_not_found'))
      end
    end

    it 'get profile for HeyHomie' do
      get api_v1_users_path, params: { username: 'HeyHomie' }
      body = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(body).to have_key('username')
      expect(body['username']).to eq('HeyHomie')
    end
  end
end
