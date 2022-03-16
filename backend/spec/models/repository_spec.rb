require 'rails_helper'

RSpec.describe Repository, type: :model do
  describe 'associations' do
    subject { build(:repository) }

    it { should belong_to(:user).class_name('User') }
  end

  describe 'validations' do
    it "repo_id should be unique and present" do
      should validate_presence_of(:repo_id) 
      should validate_uniqueness_of(:repo_id)
    end

    it "full_name should be unique and present" do 
      should validate_presence_of(:full_name) 
      should validate_uniqueness_of(:full_name)
    end

    it "html_url should be unique and present" do 
      should validate_presence_of(:html_url) 
      should validate_uniqueness_of(:html_url)
    end

    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:owner) }
    it { should validate_presence_of(:visibility) }
    it { should validate_presence_of(:user_id) }
  end
end
