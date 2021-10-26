module Github
  class ClientBase
    class ConnectionError < StandardError; end
    class AuthenticationError < StandardError; end

    def initialize; end

    def get(endpoint, query_options = {})
      http_response = connection.get(endpoint, query_options)
      formatted_response(http_response)
    end

    def post(endpoint, params)
      http_response = connection.post(endpoint, params)
      formatted_response(http_response)
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

    def handle_error
      OpenStruct.new(
        success?: false,
        status: response.status,
        body: process_body
      )
    end

    def handle_response
      OpenStruct.new(
        success?: true,
        status: response.status,
        headers: response.headers,
        body: process_body
      )
    end

    def formatted_response(response)
      @response = response
      response.success? && success_code? ? handle_response : handle_error
    end

    def process_body
      body = response.body
      return {} if body.blank?

      body.is_a?(Array) ? body.map(&:deep_symbolize_keys) : body.deep_symbolize_keys
    end

    def success_code?
      return false unless success_body_status(response.status)
  
      return true if response.body.blank? || !response.body.key?('status')

      success_body_status(response.body['status'].to_i)
    end
  
    def success_body_status(code)
      [200, 201].include? code
    end
  end  
end
