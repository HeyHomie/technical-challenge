# frozen_string_literal: true
# frozen_string_literal: true

require 'rails_helper'

describe ::V1::Users::Create, type: :service do
  let(:instance) { described_class.new(username: 'yknx4') }

  context 'given an username create user' do
    it do
      result = instance.user
      expect(result['login']).to eq('yknx4')
    end
  end
end
