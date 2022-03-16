FactoryBot.define do
  factory :repository do
    repo_id { 87654321 }
    name { "my-first-repo" }
    full_name { "Serlle/my-first-repo" }
    private { false }
    owner { "This is a array" }
    html_url  { "https://github.com/Serlle/my-first-repo" }
    visibility { "public" }
    user_id { "Association with User" }
  end
end
