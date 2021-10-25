# frozen_string_literal: true

require 'rails_helper'
require 'faraday'

describe Github::Users do
  context '.fetch' do
    it 'GETs a user\'s account data' do
      user_github_id = 1_234_567

      repos = Github::Users.fetch(user_github_id)

      expect(repos.count).to eq(1)
    end
  end
end
