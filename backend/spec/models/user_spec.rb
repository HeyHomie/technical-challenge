# frozen_string_literal: true

require 'rails_helper'

describe User, type: :model do
  context '.refresh_repos_data!' do
    it 'should update the repositories column' do
      user = create(:user, login: 'dhh')
      stub_repos_response_for user.login

      user.refresh_repos_data!

      expect(user.repositories.count).to eq(1)
    end
  end
end
