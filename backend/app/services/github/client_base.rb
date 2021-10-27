module Github
  class ClientBase
    class ConnectionError < StandardError; end
    class AuthenticationError < StandardError; end

    def initialize; end

    def get(endpoint, query_options = {})
      connection.get(endpoint, query_options)
    end

    private

    attr_reader :token, :client, :response

    def connection
      @connection ||= Faraday.new(url: ENV['GITHUB_API_URL']) do |builder|
        builder.request :authorization, 'Bearer', ENV['GITHUB_TOKEN']
        builder.request :json
        builder.response :json, content_type: /\bjson$/
        builder.headers['Accept'] = 'application/json'
        builder.options[:open_timeout] = 2
        builder.adapter(*Faraday.default_adapter)
      end
    rescue Faraday::ConnectionFailed, Faraday::TimeoutError
      raise ConnectionError
    end
  end
end
