# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::UsersController do
  render_views

  let(:user) { create(:user) }

  describe '#show' do
    context 'with a valid params' do
      it 'returns the user and his information' do
        result = OpenStruct.new(success?: true, object: user)
        allow(Users::Create).to receive(:run).and_return(result)
        get :show, format: :json, params: { id: 'MyString' }
        expect(response).to be_successful
        expect(JSON.parse(response.body)['user']['login']).to eq 'MyString'
      end
    end

    context 'with an invalid connection' do
      it 'returns an error' do
        result = OpenStruct.new(success?: false, error_message: 'Connection error')
        allow(Users::Create).to receive(:run).and_return(result)
        get :show, format: :json, params: { id: 'MyString' }
        expect(response).not_to be_successful
        expect(JSON.parse(response.body)['error']).to eq 'Connection error'
      end
    end
  end
end
