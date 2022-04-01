# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    github_id { Faker::Number.number(digits: 8) }
    login { Faker::Name.first_name  }
    url { Faker::Internet.url(host: 'github.com/users/', path: login) }
    name { Faker::Name.name }
    email { Faker::Internet.email(name: login) }
    avatar_url { Faker::Avatar.image }
    # repositories { '' }
  end
end
