# frozen_string_literal: true

require 'rails_helper'

describe User, type: :model do
  context '.refresh_repos_data!' do
    it 'should update the repositories column' do
      user = create(:user, login: 'dhh')

      response = double
      allow(response).to receive(:url).with("https://api.github.com/users/#{user.name}/repos")
      allow(response).to receive(:status).and_return(200)
      allow(response).to receive(:body).and_return(
        [
          {
            id: 1234567,
            node_id: "ABCdOeFghI9jkMNqweryNTI1MDMyNDc=",
            name: "activerecord-sqlserver-adapter",
            private: false,
            owner: {
              login: "dhh",
              id: 98765432,
              node_id: "QWE6RTYuioIyNDgyNjc1",
              type: "User",
            },
            description: "SQL Server Adapter For Rails",
          },
        ].to_json
      )
      allow(::Faraday).to receive(:get).and_return(response)

      user.refresh_repos_data!
      expect(user.repositories.count).to eq(1)
    end
  end
end
