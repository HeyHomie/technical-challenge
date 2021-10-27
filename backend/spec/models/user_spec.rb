# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Validations' do
    it 'validates attributes presence' do
      should validate_presence_of(:login)
      should validate_presence_of(:url)
      should validate_presence_of(:name)
      should validate_presence_of(:avatar_url)
    end
  end
end
