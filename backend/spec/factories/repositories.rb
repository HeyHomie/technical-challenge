# frozen_string_literal: true

FactoryBot.define do
  factory :repository do
    association :user
    name { Faker::App.name }
    language { Faker::ProgrammingLanguage.name }
    github_updated { Faker::Date.between(from: '2014-09-23', to: '2014-09-25') }
    github_id { Faker::Number.digit }
    description { Faker::Lorem.paragraph }
    url { Faker::Internet.url }
    user_id { nil }
  end
end
