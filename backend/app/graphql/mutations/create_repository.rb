# frozen_string_literal: true

class Mutations::CreateRepository < Mutations::BaseMutation
  argument :user_id, Integer, required: true
  argument :name, String, required: true
  argument :full_name, String, required: true
  argument :description, String, required: true
  argument :html_url, String, required: true

  field :repo, Types::RepositoryType, null: false
  field :errors, [String], null: false

  def resolve(user_id:, name:, full_name:, description:, html_url:)
    repo = Repository.new(user_id: user_id, name: name, full_name: full_name, description: description,
                          html_url: html_url)
    if repo.save
      {
        repo: repo,
        errors: []
      }
    else
      {
        repo: nil,
        errors: repositories.errors.full_messages
      }
    end
  end
end
