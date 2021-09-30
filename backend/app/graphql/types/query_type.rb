# frozen_string_literal: true

# rubocop:disable Style/StringConcatenation

module Types
  class QueryType < Types::BaseObject
    # all users
    field :all_users, [Types::UserType], null: false

    def all_users
      User.all
    end

    # single user
    field :user, Types::UserType, null: false do
      argument :login, String, required: true
    end

    def user(login:)
      User.find_by(login: login)
    end

    # all repositories
    field :all_repositories, [Types::RepositoryType], null: false do
      argument :user_id, Integer, required: true
    end

    def all_repositories(user_id:)
      Repository.where(user_id: user_id)
    end

    # filter repositories
    field :repository, [Types::RepositoryType], null: false do
      argument :name, String, required: true
    end

    def repository(name:)
      Repository.where('name like ?', '%' + name + '%')
    end
  end
end

# rubocop:enable Style/StringConcatenation
