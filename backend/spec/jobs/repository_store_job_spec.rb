require 'rails_helper'

RSpec.describe RepositoryStoreJob, type: :job do
  describe '#perfom' do
    let(:user) { create(:user, login: 'yknx4') }
    let(:repository) do
      [
        {
          id: 2,
          node_id: 'swkkx9xcvb',
          name: 'Ramón-Saucedo-Treviño',
          full_name: 'Dr. Arturo Carranza Nájera',
          private: true,
          html_url: 'http://api.github.com/Abel-Arteaga-Bonilla/Ramón-Saucedo-Treviño',
          description: 'Quia rem voluptatem. Rem provident dolorum. Atque temporibus dolores.',
          forks_count: 1,
          stargazers_count: 1,
          license: nil,
          visibility: 'public',
          language: 'Js',
          topics: %w[topi1 topic2],
          ssh_url: nil,
          clone_url: nil,
          updated_at: nil,
          contributors_url: nil,
          subscribers_url: nil,
          subscription_url: nil,
          forks_url: nil,
          languages_url: nil,
          stargazers_url: nil
        }
      ].as_json
    end
    let(:subject) { RepositoryStoreJob.perform_now(user: user, per_page: nil) }
    before(:each) do
      allow_any_instance_of(RepositoryStoreJob).to receive(:repositories).and_return(repository)
    end

    context 'Given an user, save a repo' do
      it do
        subject
        expect(user.repositories.find_by(repository.first[:id]).present?).to be true
      end
    end
  end
end
