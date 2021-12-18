# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    login { 'MyString' }
    id { '' }
    url { 'MyString' }
    name { 'MyString' }
    email { 'MyString' }
    avatar_url { 'MyString' }
    repositories { [] }
  end
end
