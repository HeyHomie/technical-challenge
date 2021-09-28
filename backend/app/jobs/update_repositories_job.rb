class UpdateRepositoriesJob < ApplicationJob
  queue_as :default

  def perform
    User.all.each do | user |
      GithubRepositoriesService.new().update_repositories(user)
    end
  end
end
