module Types
  class QueryType < Types::BaseObject
    field :user, Types::UserType, null: false do
      argument :login, String, required: true
    end

    def user(login:)
      User.find_by(login: login)
    end
  end
end
