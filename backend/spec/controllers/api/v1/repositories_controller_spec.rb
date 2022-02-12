# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::RepositoriesController do
  render_views

  let!(:user) { create(:user) }
  let!(:repository1) { create(:repository, user_id: user.id) }
  let!(:repository2) { create(:repository, user_id: user.id) }

  describe '#show' do
    context 'with a valid params' do
      it 'returns the repository' do
        get :show, format: :json, params: { user_id: user.id,
                                            id: repository1.id,
                                            name: 'repository' }
        expect(response).to be_successful
        expect(JSON.parse(response.body)['repository']['github_id']).to eq 226_632_462
      end
    end
  end

  describe '#index' do
    context 'with a valid params' do
      it 'returns a list of repositories' do
        get :index, format: :json, params: { user_id: user.id }
        expect(response).to be_successful
        repositories = JSON.parse(response.body)['repositories']
        expect(repositories.count).to eq 2
      end
    end
  end
end
