# frozen_string_literal: true

class RepositorySerializer
  include JSONAPI::Serializer

  attributes :github_id, :name, :data
end
