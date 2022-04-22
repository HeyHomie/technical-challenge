# frozen_string_literal: true

require 'rails_helper'

describe ::V1::Repositories::List, type: :service do
  let(:repository) { create(:repository) }
  let(:user) { repository.user }
  let(:instance) { described_class }

  before(:each) do
    create(:repository, :with_user, user: user)
    create(:repository)
    create(:repository)
    sleep 0.5
  end

  context 'given an username param render the user\'s repositories' do
    it do
      result = instance.new(search_param: nil, username: user.login).search_repo
      expect(result.count).to eq(user.repositories.count)
    end
  end

  context 'given an username param and a search term return the repo\'s user by term' do
    it do
      result = instance.new(search_param: repository.name, username: user.login).search_repo
      expect(result.count).to eq(1)
    end
  end

  context 'given a null username and nil search term return all repos' do
    it do
      result = instance.new(search_param: nil, username: nil).search_repo
      expect(result.count).to eq(Repository.all.count)
    end
  end
end
