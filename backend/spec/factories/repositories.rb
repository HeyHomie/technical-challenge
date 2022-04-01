FactoryBot.define do
  factory :repository do
    repo_id { Faker::Number.number(digits: 8) }
    name { Faker::Internet.username(specifier: '#{Faker::Internet.username} repo', separators: %w(. _ -)) }
    full_name { "Serlle/#{name}" }
    private { false }
    owner { "This is a array" }
    html_url  { Faker::Internet.url(host: 'github.com/Serlle/', path: name) }
    visibility { "public" }
    user_id { "Association with User" }
  end
end
