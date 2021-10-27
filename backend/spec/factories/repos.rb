FactoryBot.define do
  factory :repo do
    github_id { "" }
    name { "MyString" }
    data {
      { }.to_json
    }
    user { nil }
  end
end
