# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Repositories', type: :request do
  describe 'GET /index' do
    context 'when there is repositories from the user' do
      let(:username) { 'yknx4' }

      before do
        user = FactoryBot.build(:user)
        user.login = username
        user.repositories << FactoryBot.create(:repository)
        user.save
      end

      it 'gets repositories and the status code is 200' do
        get api_v1_user_repositories_path(user_id: username)
        body = JSON.parse(response.body)

        expect(response).to have_http_status(200)
      end
    end

    context 'when the user doesnt have repositories' do
      let(:username) { 'yknx4' }

      before do
        user = FactoryBot.build(:user)
        user.update(login: username)
      end

      it 'return an empty array' do
        get api_v1_user_repositories_path(user_id: username, test:'x')
        body = JSON.parse(response.body)
        expect(body).to be_empty

        expect(response).to have_http_status(404)
      end
    end

    context 'when the user has not valid format' do
      context 'with space' do
        it 'return the list of repositories empty and the status code is 500' do
          get api_v1_user_repositories_path(user_id: 'yxa dqwq casa')
          body = JSON.parse(response.body)
          expect(response).to have_http_status(500)
        end
      end

      context 'with special characters' do
        it 'return the list of repositories empty and the status code is 500' do
          get api_v1_user_repositories_path(user_id: 'fernándósg', test: 'x')
          body = JSON.parse(response.body)
          expect(response).to have_http_status(500)
        end
      end
    end
  end

  describe '#show' do
    context 'when the repository is defined' do
      context 'and there is data imported from the user' do
        let(:username) { 'yknx4' }
        let(:repository) { FactoryBot.create(:repository) }

        before do
          user = FactoryBot.build(:user)
          user.login = username
          user.repositories << repository
          user.save
        end

        it 'return the specific repository' do
          get api_v1_user_repository_path(
            { user_id: username, id: repository.name }
          )

          body = JSON.parse(response.body)
          expect(response).to have_http_status(200)
          expect(response.body).to be_eql(repository.to_json)
        end
      end
    end


    context 'when the repository is not defined' do
      let(:username) { 'yknx4' }
      let(:repository) { FactoryBot.create(:repository) }

      before do
        user = FactoryBot.build(:user)
        user.update(login: username)
      end

      it 'return an empty object and status code 404' do
        get api_v1_user_repository_path(
          { user_id: username, id: 'xnqiobqidqwq' }
        )

        body = JSON.parse(response.body)
        expect(response).to have_http_status(404)
        expect(body).to be_eql({})
      end
    end
  end
end
