# frozen_string_literal: true

# This class creates a connection with Faraday
module Connection
  class Create
    include ErrorHelper

    attr_reader :user, :service, :params

    def initialize(user, service, params)
      @user = user
      @service = service
      @params = params
    end

    def self.run(user, service, params = nil)
      new(user, service, params).run
    end

    def run
      return resolution(false, :param_required) unless user

      resolution(true, nil, result)
    rescue StandardError => _e
      resolution(false, :connection_error)
    end

    private

    def connection
      @connection ||= Faraday.new do |f|
        f.request :authorization, 'Bearer', Figaro.env.GITHUB_TOKEN
        f.request :json
        f.request :retry
        f.response :follow_redirects
        f.response :json
      end
    end

    def result
      return connection.get("http://api.github.com/users/#{user}").body if service == 'users'

      connection.get("http://api.github.com/users/#{user}/repos", params).body
    end

    def errors
      {
        connection_error: 'Connection error',
        param_required: 'User is required'
      }
    end
  end
end
