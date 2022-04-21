# frozen_string_literal: true

module V1
  module Users
    # Create user class, saves an user and its repositories, params: username
    class Create
      include FaradayConnection

      MANDATORY_USERS_PARAMS = %i[id login email].freeze
      OPT_USERS_PARAMS = %i[name url email avatar_url company bio public_repos followers following].freeze

      def initialize(username:)
        @username = username
      end

      def user
        @user = User.find_or_create_by(user_hash.slice(*MANDATORY_USERS_PARAMS))
        @user.update!(
          user_hash.slice(*OPT_USERS_PARAMS)
        )
        @user.as_json
      end

      private

      def user_hash
        @user_hash ||=
          connect.get("https://api.github.com/users/#{@username}").body.with_indifferent_access
      end
    end
  end
end
