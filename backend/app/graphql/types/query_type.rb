module Types
  class QueryType < Types::BaseObject
    field :all_repositories, [Types::RepositoryType], null: false

    def all_users
        User.all
    end
end
end
