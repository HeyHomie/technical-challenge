# frozen_string_literal: true

require 'rails_helper'
require 'faraday'

describe Github::Users do
  context '.fetch' do
    it 'GETs a user\'s account data' do
      user_name = 'dhh'
      stub_user_response_for user_name

      user = Github::Users.fetch(user_name)

      expect(user[:login]).to eq('dhh')
    end
  end
end
