# frozen_string_literal: true

require 'rails_helper'
require 'faraday'

describe Github::Repos do
  context '.fetch_from_user' do
    it 'GETs a list of repos from the user\'s account' do
      user_name = 'dhh'

      response = double
      allow(response).to receive(:url).with("https://api.github.com/users/#{user_name}/repos")
      allow(response).to receive(:status).and_return(200)
      allow(response).to receive(:body).and_return(
        [
          {
            id: 1_234_567,
            node_id: 'ABCdOeFghI9jkMNqweryNTI1MDMyNDc=',
            name: 'activerecord-sqlserver-adapter',
            private: false,
            owner: {
              login: 'dhh',
              id: 98_765_432,
              node_id: 'QWE6RTYuioIyNDgyNjc1',
              type: 'User',
            },
            description: 'SQL Server Adapter For Rails',
          },
        ].to_json
      )
      allow(::Faraday).to receive(:get).and_return(response)

      repos = Github::Repos.fetch_from_user(user_name)
      expect(repos.count).to eq(1)
    end

    it 'Fails listing repos from the user\'s account' do
      user_name = 'non_existing_user'

      response = double
      allow(response).to receive(:url).with("https://api.github.com/users/#{user_name}/repos")
      allow(response).to receive(:status).and_return(404)
      allow(response).to receive(:body).and_return([].to_json)
      allow(::Faraday).to receive(:get).and_return(response)

      expect { Github::Repos.fetch_from_user(user_name) }.to raise_error(Github::Repos::UnableToFetchRepos)
    end
  end
end
