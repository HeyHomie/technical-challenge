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

    # filter users
    field :userby, [Types::UserType], null: false do
      argument :name, String, required: true
    end

    def userby(name:)
      User.where('name like ?', '%' + name + '%')
    end

    # all repositories
    field :all_repositories, [Types::RepositoryType], null: false

    def all_repositories
      Repository.all
    end

    # filter repositories
    field :repository, [Types::RepositoryType], null: false do
      argument :user_id, Integer, required: true
      argument :name, String, required: true
    end

    def repository(name:, user_id:)
      Repository.where('name like ?', '%' + name + '%').where(user_id: user_id)
    end
  end
end

# rubocop:enable Style/StringConcatenation
