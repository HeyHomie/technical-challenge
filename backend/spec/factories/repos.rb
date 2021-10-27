# frozen_string_literal: true

FactoryBot.define do
  factory :repo do
    github_id { rand(99_999_999) }
    name { 'MyString' }
    data do
      {
        id: github_id,
        name: name
      }
    end
    user { create(:user) }
  end
end
