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
        { per_page: 100,sort: 'updated' }
      )

      if response.success?
        db_repos = Repository.where(user_id: user[:id]).select(:github_id)

        response.body.each do | repo |
          if !db_repos.include?(repo['id'])
            Repository.create({
              github_id: repo['id'],
              url: repo['html_url'],
              name: repo['name'],
              user_id: user[:id],
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
        end
        
        created_repos = Repository.where(user_id: user[:id])

        return { message: created_repos, status: 200 }
      else
        return { 
          message: "Error (#{response.status}) trying to get repository data from GitHub: #{response.body['message']} ",
          status: response.status
        }
      end
    else
      return { message: 'User not found', status: 404 }
    end
  end

  def update_repositories(user)
    if user.present?
      response = @conn.get(
        "/users/#{user[:login]}/repos",
        { per_page: 100,sort: 'updated' }
      )

      if response.success?
        response.body.each do | repo |
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

        return { message: 'Updated repos', status: 200 }
      else
        return { 
          message: "Error (#{response.status}) trying to get repository data from GitHub: #{response.body['message']} ",
          status: response.status
        }
      end
    else
      return { message: 'User not found', status: 404 }
    end
  end

end