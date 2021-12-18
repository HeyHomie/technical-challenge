FactoryBot.define do
  factory :repository do
    name { "MyString" }
    description { "MyText" }
    user { create(:user) }
  end
end
