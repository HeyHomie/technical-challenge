# == Schema Information
#
# Table name: repositories
#
#  id               :bigint           not null, primary key
#  clone_url        :string
#  contributors_url :string
#  description      :text
#  forks_count      :integer
#  forks_url        :string
#  full_name        :string
#  html_url         :string
#  language         :string
#  languages_url    :string
#  license          :string
#  name             :string
#  private          :boolean
#  ssh_url          :string
#  stargazers_count :integer
#  stargazers_url   :string
#  subscribers_url  :string
#  subscription_url :string
#  topics           :string           is an Array
#  visibility       :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  node_id          :string
#  user_id          :bigint           not null
#
# Indexes
#
#  index_repositories_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :repository do
    id { Repository.all.pluck(:id).max.to_i + 1 }
    node_id { Faker::Alphanumeric.alphanumeric(number: 10) }
    name { Faker::Name.name }
    full_name { Faker::Name.name }
    private { Faker::Boolean.boolean }
    description { Faker::Lorem.paragraph }
    forks_count { 1 }
    stargazers_count { 1 }
    license { nil }
    visibility { 'public' }
    language { 'Js' }
    topics { %w[topi1 topic2] }
    ssh_url { nil }
    clone_url { nil }
    updated_at { nil }
    contributors_url { nil }
    subscribers_url { nil }
    subscription_url { nil }
    forks_url { nil }
    languages_url { nil }
    stargazers_url { nil }
    association :user
    html_url do
      Faker::Internet.url(
        host: "api.github.com/#{user.name.gsub!(/\s+/, '-')}", path: "/#{name.gsub!(/\s+/, '-')}"
      )
    end

    trait :with_user do
      transient do
        user { user }
      end

      user_id { user.id }
      html_url do
        Faker::Internet.url(
          host: "api.github.com/#{user.name.gsub!(/\s+/, '-')}", path: "/#{name.gsub!(/\s+/, '-')}"
        )
      end
    end
  end
end
