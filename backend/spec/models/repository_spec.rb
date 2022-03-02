# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Repository, type: :model do
  let(:valid_repository) { build(:repository) }
  let(:invalid_repository) { build(:repository) }

  context 'test relationships with user' do
    it { expect(described_class.reflect_on_association(:user).macro).to eq(:belongs_to) }
  end

  context 'repo with valid attributes' do
    it 'repo success' do
      expect(valid_repository).to be_valid
    end
  end

  context 'user without valid attributes' do
    it 'is not valid whitout name' do
      invalid_repository.name = nil
      expect(invalid_repository).not_to be_valid
      expect(invalid_repository.name).to eq(nil)
    end

    it 'is not valid whitout url' do
      invalid_repository.language = nil
      expect(invalid_repository).not_to be_valid
      expect(invalid_repository.language).to eq(nil)
    end

    it 'is not valid whitout github_id' do
      invalid_repository.github_id = nil
      expect(invalid_repository).not_to be_valid
      expect(invalid_repository.github_id).to eq(nil)
    end

    it 'is not valid whitout github_updated' do
      invalid_repository.github_updated = nil
      expect(invalid_repository).not_to be_valid
      expect(invalid_repository.github_updated).to eq(nil)
    end

    it 'is not valid without url' do
      invalid_repository.url = nil
      expect(invalid_repository).not_to be_valid
      expect(invalid_repository.url).to eq(nil)
    end
  end
end
