# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Github::FetchUserService, type: :service do
  let(:username) { 'HeyHomie' }
  let(:response) { JSON.parse(File.read('spec/payloads/user_payload.json')) }
  subject(:service) { described_class.new(params: username) }

  before do
    stub_request(:get, "https://api.github.com/user?user=#{ username }").
      with(
        headers: {
          Accept: 'application/json',
          Authorization: "Bearer #{ ENV['GITHUB_TOKEN'] }",
          'User-Agent'=>'Faraday v1.7.1'
        }).
      to_return(status: 200, body: response.to_json, headers: {})
  end

  describe '#execute!' do
    it 'returns true' do
      expect(subject.execute!).to match(response.to_json)
    end
  end
end
