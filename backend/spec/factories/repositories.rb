# frozen_string_literal: true

FactoryBot.define do
  factory :repository do
    user_id { association :user }
    name { Faker::DcComics.title }
    private { Faker::Boolean.boolean }
    url { Faker::Internet.url }
    description { Faker::Lorem.paragraph }
    language { Faker::ProgrammingLanguage.name }
  end
end
