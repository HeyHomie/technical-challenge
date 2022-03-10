# frozen_string_literal: true

class GithubService
  attr_reader :basepath, :path, :conn

  def initialize(path)
    @basepath = 'https://api.github.com/users/'
    @path = path
    @conn = Faraday.new do |f|
      f.request :authorization, 'Bearer', Figaro.env.GITHUB_TOKEN
      f.request :json # encode req bodies as JSON
      f.request :retry # retry transient failures
      f.response :follow_redirects # follow redirects
      f.response :json # decode response bodies as JSON
    end
  end

  def call
    response = conn.get("#{basepath}#{path}")
    if response.status == 200 && defined?(response.body['login'])
      ResponseService.new(200, response.body).call
    else
      ResponseService.new(404, response.body).call
    end
  end
end
