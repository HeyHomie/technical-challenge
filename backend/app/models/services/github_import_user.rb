module Services
  class GithubImportUser
    include ActiveModel::Validations

    attr_reader :repositories, :result, :username
    validate :username_defined
    validate :format_user_allowed

    def initialize(args = {})
      @username = args[:username]
      @client = Octokit::Client.new
      @repositories = []
      @result = {}
    end

    def import
      return self unless valid?
      import_user_data

      if success?
        queue_import_repository
      end

      define_result

      self
    end

    def import_user_data
      begin
        @user_github = @client.user @username
        @user_db = register_user(@user_github)
      rescue Octokit::NotFound
        user_not_found
      end

      return self
    end

    def success?
      errors.empty?
    end

    private
    def queue_import_repository
      RepositoryCreationJob.perform_async({
        username: @username,
        user_db_id: @user_db.id
      })
    end

    def import_user_data
      begin
        @user_github = @client.user @username
        @user_db = register_user(@user_github)
      rescue Octokit::NotFound
        user_not_found
      end

      define_result

      return self
    end

    def define_result
      user_db = User.find_by(github_id: @username)
      @result[:username] = @username
      @result[:user] = (user_db.nil? ? {} : user_db
        .attributes.except(:repositories).to_json)
      @result[:errors] = errors.full_messages
    end

    def register_user(user_github)
      User.find_or_create_by(
        login: user_github[:login],
        name: user_github[:name],
        email: user_github[:email],
        avatar_url: "https://github.com/#{user_github}.png"
      )
    end

    def user_not_found
      register_error(I18n.t('models.services.github_import_user.user_not_found'))
      define_result

      self
    end

    def username_defined
      register_error(I18n.t('models.services.github_import_user.username_not_defined')) if @username.blank?
    end

    def register_error(message)
      logger.error(message)
      errors.add(:base, message)
    end

    def format_user_allowed
      register_error(I18n.t('models.services.github_import_and_fetch.format_user_allowed')) unless @username.match(/\A[a-z\d]*\Z/i)
    end

    def logger
      @logger ||= Logger.new(STDOUT)
    end
  end
end