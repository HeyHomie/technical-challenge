# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Github::FetchReposService, type: :service do
  let(:params) { { login: 'HeyHomie' } }
  let(:response) { JSON.parse(File.read('spec/payloads/repos_payload.json')) }
  subject(:service) { described_class.new(params: params) }

  before do
    stub_request(:get, "https://api.github.com/user/repos?per_page=#{ ENV['PAGINATION_SIZE'] }&user=#{ params[:login] } ").
      with(
        headers: {
          Accept: 'application/json',
          Authorization: "Bearer #{ ENV['GITHUB_TOKEN'] }",
          'User-Agent'=>'Faraday v1.7.1'
        }).
      to_return(status: 200, body: response, headers: {})
  end

  describe '#execute!' do
    it 'returns true' do
      expect(subject.execute!).to match_array(response)
    end
  end
end
