# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    github_id { 12345678 }
    login { 'Serlle' }
    url { 'https://github.com/Serlle' }
    name { 'Serlle Rosales' }
    email { 'serlle.rosales96@gmail.com' }
    avatar_url { 'https://avatars.githubusercontent.com/u/77982613?v=4' }
    # repositories { '' }
  end
end
