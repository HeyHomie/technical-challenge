# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[create show] do
        resources :repositories, only: %i[index]
        get 'repositories/:name', to: 'repositories#show', as: 'repository'
      end
    end
  end
end
