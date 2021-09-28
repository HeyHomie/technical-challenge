# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :all_users, [Types::UserType], null: false

    def all_users
      User.all
    end

    field :user, Types::UserType, null: false do
      argument :login, String, required: true
    end

    def user(login:)
      User.find_by(login: login)
    end
  end
end
