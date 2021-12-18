RSpec.describe Services::GithubRepoFetch do
  describe '#fetch_all_repos' do
    context 'when the username was provided' do
      let(:service) { Services::GithubRepoFetch.new(user_id: username) }
      let(:username) { 'yknx4' }
      let(:user) do
        user = FactoryBot.create(:user)
      
        user.update(login: username)
        user
      end
      
      context 'and the user exist' do
        context 'and have repositories related' do
          before do
            user.repositories << FactoryBot.create(:repository)
          end
          
          it 'return a hash with the username, user and repositories' do
            service.fetch_all_repos
            expect(service.success?).to be_truthy
            expect(service.result.keys).to be_eql([:username, :repositories, :errors])
            expect(service.result[:repositories]).not_to be_empty
          end
        end

        context 'and doesnt have repositories related' do
          let(:username) { 'cqcqcq' }
          let(:service) { Services::GithubRepoFetch.new(user_id: username) }
          before do
            user = FactoryBot.create(:user)
      
            user.update(login: username)
            user
          end

          it 'return a hash with the username and repositories with empty records' do
            service.fetch_all_repos
            expect(service.success?).to be_truthy
            expect(service.result.keys).to be_eql([:username, :repositories, :errors])
            expect(service.result[:repositories]).to be_empty
          end     
        end
      end

      context 'and the user doesnt exist' do
        let(:service) { Services::GithubRepoFetch.new(user_id: 'ubcuqibwiudbqiwbduqibdiqw', test: 'x') }

        it 'return a struct with the username, the user, and the error message for the user not found' do
          service.fetch_all_repos
          expect(service.success?).to be_falsy
          expect(service.result.keys).to be_eql([:username, :repositories, :errors])
        end
      end
    end
  end

  describe '#get_repo' do
    context 'when the username was provided' do
      context 'and have the repository related' do
        let(:service) { Services::GithubRepoFetch.new(user_id: username) }
        let(:username) { 'yknx4' }
        let(:repository) { FactoryBot.create(:repository) }
        let(:user) do
          user = FactoryBot.create(:user)
      
          user.update(login: username)
          user
        end

        before do
          user.repositories << repository
        end
        
        it 'return the hash object of the repository' do
          repository = service.get_repo(user.repositories.last.name)
          
          expect(service.success?).to be_truthy
          expect(repository).to be_eql(repository)
        end
      end

      context 'and the repository was not provided' do
        let(:service) { Services::GithubRepoFetch.new(user_id: username) }
        let(:username) { 'yknx4' }
        let(:repository) { FactoryBot.create(:repository) }
        let(:user) do
          user = FactoryBot.create(:user)
      
          user.update(login: username)
          user
        end

        before do
          user.repositories << repository
        end
        
        it 'return an empty object' do
          repository = service.get_repo(nil)
          
          expect(service.success?).to be_falsy
          expect(repository).to be_empty
          expect(service.errors.full_messages).to include(I18n.t('models.services.github_repo_fetch.repo_name_not_valid'))
        end
      end
    end
  end
end
