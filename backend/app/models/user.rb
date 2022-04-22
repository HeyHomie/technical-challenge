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
class User < ApplicationRecord
  has_many :repositories, dependent: :destroy

  after_update :create_repositories

  validates :id, :login, :email, presence: true, uniqueness: true

  def create_repositories
    ::V1::Repositories::Create.new(user: self).create_repositories
  end
end
