class GithubService
  def initialize(username)
    @username = username
  end

  def search_user
    conn.get("/users/#{@username}")
  end

  def search_repos
    conn.get("/users/#{@username}/repos", { per_page: 100, sort: 'updated' })
  end

  private
  
  def conn
    Faraday.new("https://api.github.com") do |f|
      #f.request :authorization, 'Bearer', Figaro.env.GITHUB_TOKEN
      f.request :json # encode req bodies as JSON
      f.request :retry # retry transient failures
      f.response :follow_redirects # follow redirects
      f.response :json # decode response bodies as JSON
    end
  end
end