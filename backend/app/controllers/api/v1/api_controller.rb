module Api
  module V1
    class ApiController < ActionController::Base
      before_action :authenticate

      private

      def authenticate
        unless request.authorization.present?
          head :unauthorized
          return
        end

        authenticate_with_http_basic do |email, password|
          user = User.find_by(email: email)

          if user and user.authenticate(password)
            @current_user = user
          else
            head :unauthorized
          end
        end
      end

      def current_user
        @current_user
      end
    end
  end
end