# frozen_string_literal: true

require 'rails_helper'

describe Users::Create do
  let(:user_params) do
    {
      id: 1_234_567,
      login: 'ppzzmm',
      html_url: 'https://github.com/ppzzmm',
      name: 'Pablo Zuñiga',
      email: '',
      avatar_url: 'https://avatars.githubusercontent.com/u/29339482?v=4'
    }
  end

  context 'when passed a valid params hash' do
    it 'creates a user' do
      result = OpenStruct.new(success?: true, object: user_params.with_indifferent_access)
      allow(Connection::Create).to receive(:run).and_return(result)
      allow(RepositoriesWorker).to receive(:perform_async)
      response = described_class.run('ppzzmm')
      expect(response).to be_success
      expect(response.object.github_id).to eq 1_234_567
    end
  end

  context 'when the connection with github is wrong' do
    it 'returns an error' do
      result = OpenStruct.new(success?: false, error_message: 'Connection error')
      allow(Connection::Create).to receive(:run).and_return(result)
      response = described_class.run('ppzzmm')
      expect(response).not_to be_success
      expect(response.error_message).to eq 'Connection error'
    end
  end
end
