require 'sidekiq/testing'
Sidekiq::Testing.fake!
RSpec.describe Services::GithubImportUser, vcr: true do
  describe '#import' do
    let(:service) { Services::GithubImportUser.new(username: username) }

    context 'when the username was provided' do
      let(:username) { 'yknx4' }

      context 'and the user exist' do
        it 'return a struct with the username, user' do
          previous_jobs = RepositoryCreationJob.jobs.size

          service.import
          expect(service.success?).to be_truthy
          expect(service.result.keys).to be_eql([:username, :user, :errors])
          expect(RepositoryCreationJob.jobs.size).to eq(previous_jobs+1)
        end
      end

      context 'and the user doesnt exist' do
        let(:service) { Services::GithubImportUser.new(username: 'ubcuqibwiudbqiwbduqibdiqw') }

        it 'return a struct with the username, the user, and the error message for the user not found' do
          service.import
          expect(service.success?).to be_falsy
          expect(service.result.keys).to be_eql([:username, :user, :errors])
        end
      end
    end
  end
end
