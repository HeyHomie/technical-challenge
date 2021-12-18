# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) do 
    user = User.new(login: Faker::Lorem.characters(number: 10))
    user.name = user.login

    user
  end

  describe 'name' do
    it 'is required' do
      user.name = nil
      user.valid?
      expect(user.errors[:name].size).to eq(1)
    end

    it 'is unique' do
      username = FactoryBot.create(:user).name
      user.name = username

      user.valid?
      expect(user.errors.errors[0].type).to eq(:taken)
    end
  end

  describe 'login' do
    it 'is required' do
      user.login = nil
      
      user.valid?
      expect(user.errors[:login].size).to eq(1)
    end
  end
end
