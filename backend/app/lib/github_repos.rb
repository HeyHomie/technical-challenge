# frozen_string_literal: true

require 'faraday'

module GithubRepos
  UnableToFetchRepos = Class.new(StandardError)

  class << self
    def fetch_from_user(user_name)
      response = ::Faraday.get "https://api.github.com/users/#{user_name}/repos"
      parse_or_fail response
    end

    def fetch_from_org(org_name)
      response = ::Faraday.get "https://api.github.com/orgs/#{org_name}/repos"
      parse_or_fail response
    end

    # Define the default behavior of the fetch method
    alias fetch fetch_from_user

    private

    def parse_or_fail(response)
      raise UnableToFetchRepos unless response.status == 200

      JSON.parse response.body
    end
  end
end
