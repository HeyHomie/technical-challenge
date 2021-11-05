# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    login { Faker::Name.first_name }
    github_id { Faker::Number.between(from: 1, to: 100_000) }
    url { Faker::Internet.url }
    name { Faker::Name.name }
    avatar_url { Faker::Avatar.image }
  end
end
