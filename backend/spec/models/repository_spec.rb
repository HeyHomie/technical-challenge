require 'rails_helper'

RSpec.describe Repository, type: :model do
  let(:repository) { Repository.new }
  let(:user) { FactoryBot.create(:user) }

  describe 'name' do
    it 'is required' do
      repository.name = nil
      repository.user = user

      repository.valid?
      expect(repository.errors[:name].size).to eq(1)
    end

    it 'is unique for the same user' do
    	repository = FactoryBot.build(:repository)
    	repository.user = user
    	another_repository = repository.dup

    	expect(repository.valid?).to be_truthy
    	repository.save
    	expect(another_repository.valid?).to be_falsy
    end

    it 'is not unique if is a different user' do
    	repository = FactoryBot.build(:repository)
    	repository.user = user
    	another_repository = repository.dup
    	another_repository.user = FactoryBot.create(:user)

    	expect(repository.valid?).to be_truthy
    	repository.save
    	expect(another_repository.valid?).to be_truthy
    end
  end
end
