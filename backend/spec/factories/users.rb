# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    factory :registered_user do
      email { Faker::Internet.email }
      password { Faker::Internet.password }
    end
    factory :user_with_github_id do
      github_id { Faker::Number.number(digits: 8) }
    end
  end
end

