# frozen_string_literal: true

module V1
  module Repositories
    # Search on github given an user the repositories params: user
    class Create
      def initialize(user:)
        @user = user
      end

      def create_repositories
        RepositoryStoreJob.perform_later(user: @user)
      end
    end
  end
end
