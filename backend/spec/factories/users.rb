# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    login { 'MyString' }
    id { 1 }
    url { 'MyString' }
    name { 'MyString' }
    email { 'MyString' }
    avatar_url { 'MyString' }
  end

  factory :repository do
    github_id { 226_632_462 }
    name { 'repository' }
    full_name { 'repository_pzm' }
    forks { 1 }
    open_issues { 4 }
  end
end
