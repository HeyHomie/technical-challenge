# frozen_string_literal: true

Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, param: :login, only: %i[show] do
        resources :repositories, only: %i[index]
        get 'repositories/:name', to: 'repositories#show', as: 'repository'
      end
    end
  end
end
