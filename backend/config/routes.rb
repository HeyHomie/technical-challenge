# frozen_string_literal: true
require 'sidekiq/web'

# Configure Sidekiq-specific session middleware
Sidekiq::Web.use ActionDispatch::Cookies
Sidekiq::Web.use ActionDispatch::Session::CookieStore, key: "_interslice_session"

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Sidekiq
  mount Sidekiq::Web => '/sidekiq'

  # Api routes
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
      resources :repositories, only: [:index]
    end
  end
end
