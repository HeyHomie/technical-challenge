# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  before(:all) do
    @user1 = create(:user)
  end

  describe 'associations' do
    it { should have_many(:repositories).class_name('Repository') }
  end

  describe 'validations' do

    it "is valid with valid attributes" do
      expect(@user1).to be_valid
    end

    it "github_id should be unique and present" do
       should validate_presence_of(:github_id) 
       should validate_uniqueness_of(:github_id)
    end

    it "login should be unique and present" do 
      should validate_presence_of(:login) 
      should validate_uniqueness_of(:login)
    end

    it "url should be unique and present" do 
      should validate_presence_of(:url) 
      should validate_uniqueness_of(:url)
    end
    it "avatar_url should be unique and present" do
      should validate_presence_of(:avatar_url)
      should validate_uniqueness_of(:avatar_url)
    end

    it "name should be unique and present" do 
      should validate_presence_of(:name)
      should validate_uniqueness_of(:name)
    end
  end
end
