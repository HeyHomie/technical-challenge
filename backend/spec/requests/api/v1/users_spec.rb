# frozen_string_literal: true

require 'swagger_helper'

RSpec.describe 'Api::V1::UsersController', type: :request do
  let!(:saved_user) { create(:user, :fake_user) }
  let(:valid_user) { build(:user, login: 'yknx4') }
  let(:invalid_user) { build(:user, login: :fake_user) }

  path '/api/v1/users/{login}' do
    # You'll want to customize the parameter types...
    parameter name: 'login', in: :path, type: :string, description: 'login'

    get('show user') do
      response(200, 'successful') do
        context 'if the user exist in our db' do
          it 'gets profile for fake user with login' do
            get api_v1_user_path(login: saved_user.login)
            body = JSON.parse(response.body)
            expect(response).to have_http_status(:success)
            expect(body['login']).to eq(saved_user.login)
            expect(body['repositories']).to eq([])
          end
        end

        context 'if the user  not exist in our db' do
          it 'gets profile for yknx4' do
            get api_v1_user_path(login: valid_user.login)
            body = JSON.parse(response.body)
            expect(response).to have_http_status(:success)
            expect(body).to have_key('login')
            expect(body['login']).to eq('yknx4')
          end
        end
      end
      response(404, 'not found') do
        it 'gets 404 not found' do
          get api_v1_user_path(login: invalid_user.login)
          expect(response).to have_http_status(:not_found)
        end
      end
    end
  end
end
