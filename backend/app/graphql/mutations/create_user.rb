# frozen_string_literal: true

# rubocop:disable Metrics/MethodLength
class Mutations::CreateUser < Mutations::BaseMutation
  argument :login, String, required: true

  field :user, Types::UserType, null: false
  field :errors, [String], null: false

  def resolve(login:)
    conn = Faraday.new do |f|
      f.request :authorization, 'Bearer', Figaro.env.GITHUB_TOKEN
      f.request :json # encode req bodies as JSON
      f.request :retry # retry transient failures
      f.response :follow_redirects # follow redirects
      f.response :json # decode response bodies as JSON
    end
    api_user = conn.get("https://api.github.com/users/#{login}").body
    return { user: nil, errors: ['User not found'] } if api_user['message'] == 'Not Found'

    db_user = User.all.find { |u| u.github_id == api_user['id'] }
    user = if db_user.nil?
             User.new(login: api_user['login'], github_id: api_user['id'], url: api_user['html_url'],
                      name: api_user['name'], email: api_user['email'], avatar_url: api_user['avatar_url'])
           else
             db_user
           end

    if user.save
      {
        user: user,
        errors: []
      }
    else
      {
        user: nil,
        errors: user.errors.full_messages
      }
    end
  end
end
# rubocop:enable Metrics/MethodLength
