module User
  class CreateService
    def initialize(user:, params:)
      @params = params
      @user = user
    end

    def execute!
      user.assign_attributes(buid_attributes)
      user.save!
    end

    private

    def buid_attributes
      {
        github_id: params['id'],
        login: params['login']
        url: params['html_url']
        name: params['name']
        email: params['email']
        avatar_url: params['avatar_url']
        repositories: repos
      }
    end

    attr_reader :params, :user

    def repos
      @repos ||= Github::FetchReposService.new(params: params).execute!
    end
  end
end
