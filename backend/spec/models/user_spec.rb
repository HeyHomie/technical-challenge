# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id           :bigint           not null, primary key
#  avatar_url   :string
#  bio          :string
#  company      :string
#  email        :string
#  followers    :integer
#  following    :integer
#  login        :string
#  name         :string
#  public_repos :integer
#  url          :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  unique_login_email  (login,email) UNIQUE
#
require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { create(:user) }

  it { expect(subject).to be_valid }
  it { is_expected.to validate_presence_of(:id) }
  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to validate_presence_of(:login) }
  it { is_expected.to validate_uniqueness_of(:id) }
  it { is_expected.to validate_uniqueness_of(:email) }
  it { is_expected.to validate_uniqueness_of(:login) }
end
