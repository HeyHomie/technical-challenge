# frozen_string_literal: true

class UserSerializer < ActiveModel::Serializer
  attribute :login
  attribute :github_id
  attribute :url
  attribute :email
  attribute :name
  attribute :avatar_url
  attribute :repositories
end
