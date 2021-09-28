# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :login, String, null: true
    field :github_id, Integer, null: true
    field :url, String, null: true
    field :name, String, null: true
    field :email, String, null: true
    field :repositories, [Types::RepositoryType], null: true
    field :avatar_url, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def repositories_count
      object.repositories.size
    end
  end
end
