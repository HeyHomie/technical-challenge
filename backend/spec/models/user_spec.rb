# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'User validations' do
    it { should have_many(:repositories) }
    it { is_expected.to validate_uniqueness_of(:id) }
    it { is_expected.to validate_presence_of(:github_id) }
    it { is_expected.to validate_uniqueness_of(:github_id) }
    it { is_expected.to validate_presence_of(:login) }
    it { is_expected.to validate_uniqueness_of(:login) }
    it { is_expected.to validate_presence_of(:url) }
    it { is_expected.to validate_presence_of(:avatar_url) }
  end

  it 'is not valid without a github_id' do
    expect(described_class.new(github_id: nil)).not_to be_valid
  end

  it 'is not valid without a login' do
    expect(described_class.new(login: nil)).not_to be_valid
  end
end
