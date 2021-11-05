# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Users', type: :request do
  let(:github_user) { create(:user) }

  describe 'GET method' do
    it 'show all users' do
      get api_v1_users_path
      expect(response).to have_http_status(:success)
    end

    it 'get profile for yknx4' do
      github_user.login = 'yknx4'
      github_user.save
      get api_v1_user_path('yknx4')
      body = JSON.parse(response.body)
      expect(response).to have_http_status(:success)
      expect(body).to have_key('login')
      expect(body['login']).to eq('yknx4')
    end

    it 'get profile for HeyHomie' do
      github_user.login = 'HeyHomie'
      github_user.save
      get api_v1_user_path('HeyHomie')
      body = JSON.parse(response.body)
      expect(response).to have_http_status(:success)
      expect(body).to have_key('login')
      expect(body['login']).to eq('HeyHomie')
    end

    it "get message if user doesn't exist" do
      get api_v1_user_path('user_not_created')
      body = JSON.parse(response.body)
      expect(response).to have_http_status(:success)
      expect(body).to have_key('message')
      expect(body['message']).to eq("The user doesn't exist")
    end
  end

  describe 'POST methods' do
    it 'create profile for yknx4' do
      post api_v1_users_path, params: { username: 'yknx4' }
      body = JSON.parse(response.body)
      expect(response).to have_http_status(:success)
      expect(body['message']).to eq("User #{User.last.login} was added successfully")
    end
    it 'create profile for HeyHomie' do
      post api_v1_users_path, params: { username: 'HeyHomie' }
      body = JSON.parse(response.body)
      expect(response).to have_http_status(:success)
      expect(body['message']).to eq("User #{User.last.login} was added successfully")
    end
  end

  describe 'Delete method' do
    it 'User model count decrease when delete' do
      new_user = github_user
      expect { new_user.delete }.to change(User, :count).from(1).to(0)
    end
  end
end
