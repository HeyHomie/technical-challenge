# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::UsersController', type: :request do
  let!(:saved_user) { create(:user, :fake_user) }
  let(:valid_user) { build(:user, login: 'yknx4') }
  let(:invalid_user) { build(:user, login: :fake_user) }

  describe 'get /show' do
    context 'if the user dont exists' do
      it 'gets profile for fake user with id' do
        get api_v1_user_path(id: 100_000)
        expect(response).to have_http_status(:not_found)
      end
    end

    context 'if the user exist in our db' do
      it 'gets profile for fake user with id' do
        get api_v1_user_path(id: saved_user.id)
        body = JSON.parse(response.body)
        expect(response).to have_http_status(:success)
        expect(body['login']).to eq(saved_user.login)
        expect(body['repositories']).to eq([])
      end
    end

  end

  describe 'post /create' do
    context 'if the user exist in our db' do
      it 'gets profile for fake user with login' do
        post api_v1_users_path(login: saved_user.login)
        body = JSON.parse(response.body)
        expect(response).to have_http_status(:success)
        expect(body['login']).to eq(saved_user.login)
        expect(body['repositories']).to eq([])
      end
    end

    context 'if the user  not exist in our db' do
      it 'gets profile for yknx4' do
        post api_v1_users_path(login: valid_user.login)
        body = JSON.parse(response.body)
        expect(response).to have_http_status(:success)
        expect(body).to have_key('login')
        expect(body['login']).to eq('yknx4')
      end

      it 'gets 404 not found' do
        post api_v1_users_path(login: invalid_user.login)
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
