# frozen_string_literal: true

module Github
  module Users
    UnableToFetchUser = Class.new(StandardError)

    class << self
      def fetch(user_name)
        response = ::Faraday.get "https://api.github.com/users/#{user_name}"
        parse_or_fail response
      end

      private

      def parse_or_fail(response)
        raise UnableToFetchUser unless response.status == 200

        JSON.parse(response.body).deep_symbolize_keys!
      end
    end
  end
end
