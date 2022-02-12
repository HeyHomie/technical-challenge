# frozen_string_literal: true

# This class search the user in GitHub and if we have not the user in our
# database this class create a new user with the GitHub's information
module Users
  class Create
    include ErrorHelper

    attr_reader :user_name

    def initialize(user_name)
      @user_name = user_name
    end

    def self.run(user_name)
      new(user_name).run
    end

    def run
      response = Connection::Create.run(user_name, 'users')
      return response unless response.success?

      user = find_or_create(response.object)
      repositories(user) if user.valid?
      resolution(true, nil, user)
    end

    private

    def find_or_create(data)
      user = User.all.find { |u| u.github_id == data['id'] }
      return User.create(user_params(data)) if user.nil?

      user
    end

    def user_params(data)
      {
        github_id: data['id'],
        login: data['login'],
        url: data['html_url'],
        name: data['name'],
        email: data['email'],
        avatar_url: data['avatar_url']
      }
    end

    def repositories(user)
      RepositoriesWorker.perform_async(user.id)
    end
  end
end
