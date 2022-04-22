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
FactoryBot.define do
  factory :user do
    login { Faker::Internet.username }
    id { Faker::Number.number(digits: 10) }
    name { Faker::Name.name }
    url { Faker::Internet.url(host: 'api.github.com', path: "/users/#{name}") }
    email { Faker::Internet.unique.email }
    avatar_url { Faker::Internet.url(host: 'avatars.githubusercontent.com', path: "/u/#{Faker::Number.number(digits: 9)}?v=4") }
    company { Faker::Name.name }
    bio { nil }
    public_repos { nil }
    followers { Faker::Number.number(digits: 3) }
    following { Faker::Number.number(digits: 3) }
  end
end
