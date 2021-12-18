# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    login { Faker::Lorem.characters(number: 10) }
    id { '' }
    url { 'MyString' }
    name { login }
    email { 'MyString' }
    avatar_url { 'MyString' }
    repositories { [] }
  end
end
