# frozen_string_literal: true

# This class search the repositories in GitHub and if we have not the repositories
# in our database this class create a new repository with the GitHub's information
module Repositories
  class Create
    include ErrorHelper

    attr_reader :user

    def initialize(user)
      @user = user
    end

    def self.run(user)
      new(user).run
    end

    def run
      response = Connection::Create.run(user.login, 'repos', { per_page: 100 })
      return response unless response.success?

      save(response.object)
      resolution(true, nil, user)
    end

    private

    def save(data)
      data.each do |repository|
        next if repository?(repository)

        user.repositories.create(repository_params(repository))
      end
    end

    def repository_params(data)
      {
        github_id: data['id'],
        name: data['name'],
        full_name: data['full_name'],
        forks: data['forks'],
        open_issues: data['open_issues']
      }
    end

    def repository?(data)
      !user.repositories.find_by(user_id: user.id, github_id: data['id']).nil?
    end
  end
end
