# frozen_string_literal: true

class GithubRepositoriesService
  def initialize
    @conn = Faraday.new 'https://api.github.com' do |f|
      f.request :authorization, 'Bearer', Figaro.env.GITHUB_TOKEN
      f.request :json # encode req bodies as JSON
      f.request :retry # retry transient failures
      f.response :follow_redirects # follow redirects
      f.response :json # decode response bodies as JSON
    end
  end

  def create_repositories(user)
    if user.present?
      response = @conn.get(
        "/users/#{user[:login]}/repos",
        { per_page: 100, sort: 'updated' }
      )

      if response.success?
        repos = response.body.map do |repo|
          Repository.find_or_create_by(github_id: repo['id']) do |r|
            r.github_id = repo['id']
            r.url = repo['html_url']
            r.name = repo['name']
            r.user_id = user[:id]
            r.fork = repo['fork']
            r.description = repo['description']
            r.language = repo['language']
            r.stars = repo['stargazers_count']
            r.forks = repo['forks_count']
            r.license = repo['license'] ? repo['license']['name'] : nil
            r.last_updated = repo['updated_at']
            r.archived = repo['archived']
            r.private = repo['private']
          end
        end

        { message: repos, status: 200 }
      else
        {
          message: "Error (#{response.status}) trying to get repository data from GitHub: #{response.body['message']} ",
          status: response.status
        }
      end
    else
      { message: 'User not found', status: 404 }
    end
  end

  def update_repositories(user)
    if user.present?
      response = @conn.get(
        "/users/#{user[:login]}/repos",
        { per_page: 100, sort: 'updated' }
      )

      if response.success?
        response.body.each do |repo|
          old_repo = Repository.find_by(github_id: repo['id'])
          old_repo.update({
                            url: repo['html_url'],
                            name: repo['name'],
                            fork: repo['fork'],
                            description: repo['description'],
                            language: repo['language'],
                            stars: repo['stargazers_count'],
                            forks: repo['forks_count'],
                            license: repo['license'] ? repo['license']['name'] : nil,
                            last_updated: repo['updated_at'],
                            archived: repo['archived'],
                            private: repo['private']
                          })
        end

        { message: 'Updated repos', status: 200 }
      else
        {
          message: "Error (#{response.status}) trying to get repository data from GitHub: #{response.body['message']} ",
          status: response.status
        }
      end
    else
      { message: 'User not found', status: 404 }
    end
  end
end
