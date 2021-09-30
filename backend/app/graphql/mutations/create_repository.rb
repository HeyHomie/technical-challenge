# frozen_string_literal: true

class Mutations::CreateRepository < Mutations::BaseMutation
  argument :user_id, Integer, required: true
  argument :login, String, required: true

  field :repo, Types::RepositoryType, null: false
  field :errors, [String], null: false

  def resolve(user_id:, login:)
    response = RestClient.get("https://api.github.com/users/#{login}/repos")
    json = JSON.parse(response)

    json.each_with_index do |repo, _index|
      Repository.create(user_id: user_id, name: repo['name'], full_name: repo['full_name'],
                        description: repo['description'], html_url: repo['html_url'])
    end
    {
      repo: nil
    }
  end
end
