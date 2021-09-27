module Types
  class RepositoryType < Types::BaseObject
    field :id, ID, null: false
    field :user_id, Integer, null: true
    field :name, String, null: true
    field :full_name, String, null: true
    field :description, String, null: true
    field :html_url, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
