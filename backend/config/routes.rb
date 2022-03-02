# frozen_string_literal: true

Rails.application.routes.draw do
  resources :repositories
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[index create show] do
        resources :repositories, only: %i[index show]
      end
    end
  end
end
