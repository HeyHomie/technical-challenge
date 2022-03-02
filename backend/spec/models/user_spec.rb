# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:valid_user) { build(:user, :fake_user) }
  let(:invalid_user) { build(:user, :fake_user) }

  context 'test relationships' do
    it { expect(described_class.reflect_on_association(:repositories).macro).to eq(:has_many) }
  end

  context 'user with valid attributes' do
    it 'user success' do
      expect(valid_user).to be_valid
    end
  end

  context 'user without valid attributes' do
    it 'is not valid whitout login' do
      invalid_user.login = nil
      expect(invalid_user).not_to be_valid
      expect(invalid_user.login).to eq(nil)
    end

    it 'is not valid whitout url' do
      invalid_user.url = nil
      expect(invalid_user).not_to be_valid
      expect(invalid_user.url).to eq(nil)
    end

    it 'is not valid whitout github_id' do
      invalid_user.github_id = nil
      expect(invalid_user).not_to be_valid
      expect(invalid_user.github_id).to eq(nil)
    end

    it 'is not valid whitout name' do
      invalid_user.name = nil
      expect(invalid_user).not_to be_valid
      expect(invalid_user.name).to eq(nil)
    end

    it 'is not valid without avatar_url' do
      invalid_user.avatar_url = nil
      expect(invalid_user).not_to be_valid
      expect(invalid_user.avatar_url).to eq(nil)
    end
  end
end
