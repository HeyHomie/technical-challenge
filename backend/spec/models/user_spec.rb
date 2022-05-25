# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  it 'register a new user with password' do
    user = create(:registered_user)
    expect(user).to be_valid
  end

  it 'register a new user without password' do
    user = build(:registered_user)
    user.password = nil
    expect(user).to_not be_valid
  end

  it 'register a new user with github_id' do
    user = create(:user_with_github_id)
    expect(user).to be_valid
  end
end
