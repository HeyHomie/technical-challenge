# frozen_string_literal: true

class RepositoriesWorker
  include Sidekiq::Worker
  sidekiq_options queue: 'repositories', retry: 5

  def perform(user_id)
    user = User.find(user_id)
    Repositories::Create.run(user)
  end
end
