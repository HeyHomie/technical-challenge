# frozen_string_literal: true

require 'rails_helper'
require 'faraday'

describe Github::Users do
  context '.fetch' do
    it 'GETs a user\'s account data' do
      user_name = 'dhh'

      response = double
      allow(response).to receive(:url).with("https://api.github.com/users/#{user_name}")
      allow(response).to receive(:status).and_return(200)
      allow(response).to receive(:body).and_return(
        {
          id: 98_765_432,
          login: 'dhh',
          node_id: 'QWE6RTYuioIyNDgyNjc1',
          type: 'User'
        }.to_json
      )
      allow(::Faraday).to receive(:get).and_return(response)
      user = Github::Users.fetch(user_name)

      expect(user['login']).to eq('dhh')
    end
  end
end
