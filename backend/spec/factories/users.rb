# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    login { 'MyString' }
    id { rand(99_999_999) }
    url { 'MyString' }
    name { 'MyString' }
    email { 'MyString' }
    avatar_url { 'MyString' }
  end
end
