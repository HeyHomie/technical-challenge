# frozen_string_literal: true

json.user do
  json.id @user.id
  json.login @user.login
  json.github_id @user.github_id
  json.url @user.url
  json.name @user.name
  json.email @user.email
  json.avatar_url @user.avatar_url
  json.created_at @user.created_at
  json.updated_at @user.updated_at
end
