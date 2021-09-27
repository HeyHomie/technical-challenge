# frozen_string_literal: true

Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "graphql#execute"
  end
  post "/graphql", to: "graphql#execute"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # ! This is legacy code for v1 REST API that sadly no longer works.
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index] do
        resources :repositories, only: [:index]
      end
    end
  end
end
