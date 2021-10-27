# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Show a user', type: :request do
  let(:username) { 'HeyHomie' }
  let(:response) { File.read('spec/payloads/user_payload.json') }
  subject(:request) { get "/api/v1/users/#{ username }" }

  before do
    FactoryBot.create(:user)

    stub_request(:get, "https://api.github.com/user?user=#{ username }").
      with(
        headers: {
          Accept: 'application/json',
          Authorization: "Bearer #{ ENV['GITHUB_TOKEN'] }",
          'User-Agent'=>'Faraday v1.7.1'
        }).
      to_return(status: 200, body: JSON.parse(response), headers: {})
  end

  context 'when a user exists' do
    xit 'returns an OK status' do
      request
      expect(response).to have_http_status(:ok)
    end

    xit 'returns a existing user' do
      request
      expect(response.body).to include username
    end
  end

  context 'when a user does not exists' do
    xit 'returns an OK status' do
      request
      expect(response).to have_http_status(:ok)
    end
  end
end
