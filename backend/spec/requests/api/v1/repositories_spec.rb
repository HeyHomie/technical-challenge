# frozen_string_literal: true

require 'swagger_helper'

RSpec.describe 'Api::V1::Repositories', type: :request do
  let!(:saved_user) { create(:user, :fake_user) }
  let(:unsaved_user) { build(:user, :fake_user) }

  path '/api/v1/users/{user_login}/repositories/{name}' do
    # You'll want to customize the parameter types...
    get('show repository') do
      parameter name: 'user_login', in: :path, type: :string, description: 'user login'
      parameter name: 'name', in: :path, type: :string, description: 'repositories name'

      before do
        @saved_repository = create(:repository, user_id: saved_user.id)
        @unsaved_repository = build(:repository, user_id: saved_user.id)
      end
      response(200, 'successful') do
        it 'gets specify repository' do
          get api_v1_user_repository_path(saved_user.login, name: @saved_repository.name)
          body = JSON.parse(response.body)
          expect(response).to have_http_status(200)
          expect(body['name']).to eq(@saved_repository.name)
        end
      end
      response(404, 'not found') do
        it 'gets specify repository' do
          get api_v1_user_repository_path(saved_user.login, name: @unsaved_repository.name)
          expect(response).to have_http_status(404)
        end
      end
    end
  end

  path '/api/v1/users/{user_login}/repositories/' do
    get('show repositories') do
      response(200, 'successful') do
        parameter name: 'user_login', in: :path, type: :string, description: 'user login'

        before do
          @repos = create_list(:repository, 10, user_id: saved_user.id)
        end

        it 'gets repositories for random user' do
          get api_v1_user_repositories_path(user_login: saved_user.login)
          body = JSON.parse(response.body)
          expect(response).to have_http_status(200)
          expect(body.count).to eq(10)
        end
      end
    end
  end
end
