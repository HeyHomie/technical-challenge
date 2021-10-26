# frozen_string_literal: true

Rails.application.routes.draw do
  health_check_routes

  namespace :api do
    namespace :v1 do
      resources :users, only: :show do
        resources :repositories, only: :index
      end
    end
  end
end
