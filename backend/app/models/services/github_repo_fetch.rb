class Services::GithubRepoFetch
  include ActiveModel::Validations

  attr_reader :repositories, :result, :username
  validate :username_defined
  validate :format_user_allowed
  validate :user_exists

  def initialize(args = {})
    @username = args[:user_id]
    @client = Octokit::Client.new
    @repositories = []
    @result = {}
    @test = args[:test]
  end

  def fetch_all_repos
    return self unless valid?
    
    @repositories = Repository
      .joins(:user)
      .where(
        user: { login: @username }
      )

    define_result

    @repositories
  end

  def get_repo(repo_name)
    if repo_name.blank? || !valid_repo_name?(repo_name)
      errors.add(:base, I18n.t('models.services.github_repo_fetch.repo_name_not_valid'))

      define_result

      return {}
    end

    Repository
      .joins(:user)
      .where(
        user: { login: @username },
        name: repo_name
    ).first || {}
  end

  def success?
    errors.empty?
  end

  private
  def valid_repo_name?(repo_name)
    repo_name.match(/\A[a-z\d]*\Z/i)
  end

  def define_result
    @result[:username] = @username
    @result[:repositories] = @repositories
    @result[:errors] = errors.full_messages
  end

  def get_repositories
    @repositories
  end

  def username_defined
    errors.add(:base, I18n.t('models.services.github_import_user.username_not_defined')) if @username.blank?
  end

  def format_user_allowed
    errors.add(:base, I18n.t('models.services.github_import_user.format_user_allowed')) unless @username.match(/\A[a-z\d]*\Z/i)
  end

  def user_exists
    errors.add(:base, I18n.t('models.services.github_import_user.user_not_found')) unless User.exists?(login: username)
    define_result

    self
  end
end
