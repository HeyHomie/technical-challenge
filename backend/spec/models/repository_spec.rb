# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Repository, type: :model do
  describe 'Repositories validations' do
    it { should belong_to(:user) }
    it { is_expected.to validate_uniqueness_of(:id) }
    it { is_expected.to validate_presence_of(:url) }
    it { is_expected.to validate_uniqueness_of(:url) }
    it { is_expected.to validate_presence_of(:name) }
  end

  describe 'Validate require fields'
  it 'is not vali whithout an url' do
    expect(described_class.new(url: nil)).not_to be_valid
  end

  it 'it not valid whithout a name' do
    expect(described_class.new(name: nil)).not_to be_valid
  end
end
