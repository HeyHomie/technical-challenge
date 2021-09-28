class GithubService
  def initialize
    @conn = Faraday.new 'https://api.github.com' do |f|
      f.request :authorization, 'Bearer', Figaro.env.GITHUB_TOKEN
      f.request :json # encode req bodies as JSON
      f.request :retry # retry transient failures
      f.response :follow_redirects # follow redirects
      f.response :json # decode response bodies as JSON
    end
  end

  def create_user(username)
    response = @conn.get "/users/#{username}"
    if response.status == 200
      user = User.create({
        github_id: response.body['id'], 
        login: response.body['login'], 
        url: response.body['html_url'], 
        name: response.body['name'],
        email: response.body['email'], 
        avatar_url: response.body['avatar_url']
      })
      return {
        user: user, 
        status: 200
      }
    else
      return { 
        error: "Error (#{response.status}) trying to get user data 
        from GitHub: #{response.body['message']} " , 
        status: response.status  
      }
    end
  end

  def update_user(user)
    response = @conn.get "/users/#{username}"
    if response.status == 200
      updated_user = User.update(user[:id], {
        login: response.body['login'], 
        url: response.body['html_url'], 
        name: response.body['name'],
        email: response.body['email'], 
        avatar_url: response.body['avatar_url']
      })
      return {
        user: updated_user, 
        status: 200
      }
    else
      return { 
        error: "Error (#{response.status}) trying to get user data 
        from GitHub: #{response.body['message']} " , 
        status: response.status  
      }
    end
  end

end