module Github
  class FetchUserService
    def initialize(params:)
      @params = params
    end
  
    def execute!
      client.get(user_endpoint).body
    end
  
    private
  
    attr_reader :params
  
    def user_endpoint
      @user_endpoint ||= "user?user=#{ params }"
    end

    def client
      @client ||= ClientBase.new
    end
  end
end
