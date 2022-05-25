# frozen_string_literal: true

module GithubAPI
  class Client
    API_ENDPOINT = 'https://api.github.com'

    def initialize(token = nil)
      @conn = Faraday.new(API_ENDPOINT) do |f|
        f.headers[:Authorization] = "token #{token}" if token # set auth header if token exists
        f.request :json # encode req bodies as JSON
        f.request :retry # retry transient failures
        f.response :follow_redirects # follow redirects
        f.response :json # decode response bodies as JSON
      end
    end

    def get_user(username)
      request :get, "/users/#{username}"
    end

    def get_user_repos(username, params)
      request :get, "/users/#{username}/repos", params
    end

    private

    def request(http_method, path, params = {})
      response = @conn.public_send(http_method, path, params)
      return response.body if response.status == 200
      raise GithubAPI::Error.new(response.status, response.body['message'])
    end
  end

  class Error < StandardError
    attr_reader :status, :body

    def initialize(status, body)
      @status = status
      @body = body
    end

    def message
      body
    end

    def to_s
      "GithubAPI::Error [#{status}]: #{message}"
    end

    def inspect
      "GithubAPI::Error [#{status}]: #{message}"
    end

    def to_json
      {
        status: status,
        message: body
      }.to_json
    end
  end
end