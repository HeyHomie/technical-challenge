# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    trait :new_user do
      login { 'MyString' }
      id { '' }
      url { 'MyString' }
      name { 'MyString' }
      email { 'MyString' }
      avatar_url { 'MyString' }
      repositories { '' }
    end

    trait :fake_user do
      login { Faker::Internet.username }
      id { '' }
      url { Faker::Internet.url }
      name { Faker::FunnyName.name }
      email { Faker::Internet.email }
      avatar_url { Faker::Avatar.image }
    end
  end
end
