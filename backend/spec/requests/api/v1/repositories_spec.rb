# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Repositories', type: :request do
  let(:username) { 'HeyHomie' }
  subject(:request) { get "/api/v1/users/#{ username }/repositories" }

  before { FactoryBot.create(:user) }

  describe 'GET /index' do
    it 'returns an OK status' do
      request
      expect(response).to have_http_status(:ok)
    end
  end
end
