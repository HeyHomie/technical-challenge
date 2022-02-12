# frozen_string_literal: true

require 'rails_helper'

describe Repositories::Create do
  let(:user) { create(:user) }
  let(:repository) do
    {
      id: 1_234_567,
      name: 'ppzzmm',
      full_name: 'PZM',
      private: false,
      forks: 0,
      open_issues: 0
    }
  end

  context 'when passed a valid params hash' do
    it 'creates a user' do
      result = OpenStruct.new(success?: true, object: [repository.with_indifferent_access])
      allow(Connection::Create).to receive(:run).and_return(result)
      response = described_class.run(user)
      expect(response).to be_success
      repository = response.object.repositories.find_by(github_id: 1_234_567)
      expect(repository).not_to be_nil
    end
  end

  context 'when the connection with github is wrong' do
    it 'returns an error' do
      result = OpenStruct.new(success?: false, error_message: 'Connection error')
      allow(Connection::Create).to receive(:run).and_return(result)
      response = described_class.run(user)
      expect(response).not_to be_success
      expect(response.error_message).to eq 'Connection error'
    end
  end
end
