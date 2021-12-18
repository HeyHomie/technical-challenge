require 'rails_helper' # include in your RSpec file
require 'sidekiq/testing' #include in your Rspec file
Sidekiq::Testing.fake! #include in your RSpec file

RSpec.describe RepositoryCreationJob, type: :worker do
  context 'when the params are given' do
    subject(:worker) { RepositoryCreationJob.new }
    let(:username) { 'yknx4' }
    let(:user) do
      user = FactoryBot.create(:user)
      user.update(login: username)

      user
    end

    let(:params) { { 'username' => username, 'user_db_id' => user.id } }

    before do
      allow(worker).to receive(:fetch_user).and_return({})
      allow(worker).to receive(:get_repositories).and_return([
        {
          name: 'Repo1',
          description: 'Repo description',
          user_id: user.id,
          extra_data: {}
        }
      ])
    end

    it 'the job is enqueued' do
      previous_jobs = RepositoryCreationJob.jobs.size

      RepositoryCreationJob.perform_async(params)

      expect(RepositoryCreationJob.jobs.size).to eq(previous_jobs+1)
    end

    it 'the records of the repository are given' do
      previous_jobs = RepositoryCreationJob.jobs.size
      previous_repos = Repository.count

      worker.perform(params)
      expect(Repository.count).to eq(previous_repos+1)
    end
  end

  context 'when the username is provided but was not register in the db' do
    subject(:worker) { RepositoryCreationJob.new }
    let(:username) { 'yknx4' }

    let(:params) { { 'username' => username, 'user_db_id' => 1 } }

    it 'the job is not enqueued and the error of user not found is registered' do
      previous_jobs = RepositoryCreationJob.jobs.size

      worker.perform(params)

      expect(RepositoryCreationJob.jobs.size).to eq(previous_jobs)
      expect(worker.errors).to include(I18n.t('models.services.github_import_and_fetch.user_not_found'))
    end
  end
end
