# frozen_string_literal: true

module Api
  module V1
    class UserRepositoriesWorker
      include Sidekiq::Worker

      def perform(user_id, github_login)
        github_user = Github_gem.user github_login
        github_user.rels[:repos].get.data.each do |repository|
          Repository.create!({ user_id: user_id,
                               name: repository.name,
                               private: repository&.private,
                               url: repository.html_url,
                               description: repository&.description,
                               language: repository&.language })
        end
      end
    end
  end
end
