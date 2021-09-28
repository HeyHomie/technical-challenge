# frozen_string_literal: true

class Mutations::CreateUser < Mutations::BaseMutation
  argument :login, String, required: true
  argument :github_id, String, required: true
  argument :url, String, required: true
  argument :name, String, required: true
  argument :email, String, required: true
  argument :avatar_url, String, required: true

  field :user, Types::UserType, null: false
  field :errors, [String], null: false

  def resolve(login:, github_id:, url:, name:, email:, avatar_url:)
    user = User.new(login: login, github_id: github_id, url: url, name: name, email: email,
                    avatar_url: avatar_url)
    if user.save
      {
        user: user,
        errors: []
      }
    else
      {
        user: nil,
        errors: user.errors.full_messages
      }
    end
  end
end
