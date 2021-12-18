# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { User.new }

  describe 'name' do
    it 'is required' do
      user.name = nil
      user.valid?
      expect(user.errors[:name].size).to eq(1)
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
