# frozen_string_literal: true

require 'rails_helper'

describe ::V1::Repositories::Create, type: :service do
  let(:user) { create(:user, login: 'yknx4') }
  let(:instance) { described_class.new(user: user) }

  context 'given an username create repositories' do
    it do
      user_reports_count = user.repositories.count
      instance.create_repositories
      expect(user.repositories.count).to be user_reports_count
    end
  end
end
