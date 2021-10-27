module Github
  class FetchReposService
    def initialize(params:)
      @params = params
    end
  
    def execute!
      client.get(repos_endpoint, { per_page: pagination }).body
    end
  
    private
  
    attr_reader :params
  
    def repos_endpoint
      @repos_endpoint ||= "user/repos?user=#{ params[:login] }"
    end
  
    def client
      @client ||= ClientBase.new
    end
  
    def pagination
      ENV['PAGINATION_SIZE']
    end
  end
end
