# frozen_string_literal: true

class UserSerializer
  include JSONAPI::Serializer

  attributes :login, :github_id, :url, :name, :email, :avatar_url
end
