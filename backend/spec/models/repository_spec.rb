require 'rails_helper'

RSpec.describe Repository, type: :model do
  let(:repository) { Repository.new }

  describe 'name' do
    it 'is required' do
      repository.name = nil
      repository.valid?
      expect(repository.errors[:name].size).to eq(1)
    end
  end
end
