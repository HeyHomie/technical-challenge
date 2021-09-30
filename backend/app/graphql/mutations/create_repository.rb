# frozen_string_literal: true

class Mutations::CreateRepository < Mutations::BaseMutation
  argument :login, String, required: true

  field :repo, [Types::RepositoryType], null: false
  field :errors, [String], null: false

  def resolve(login:)
    response = RestClient.get("https://api.github.com/users/#{login}/repos")
    json = JSON.parse(response)

    json.each do |repo|
      User.find_by(login: login).repositories.create(name: repo['name'], full_name: repo['full_name'],
                                                     description: repo['description'], html_url: repo['html_url'])
    end
    {
      repo: Repository.all
    }
  end
end
