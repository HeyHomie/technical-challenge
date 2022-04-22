# frozen_string_literal: true

# select x.value::json->'id' as id, x.value::json->'name' as name
# from(
# 	select elems.value
# 	from users u, jsonb_array_elements(u.repositories) elems
# )x
# where x.value::json->>'id' IN ('354887403', '404073478', '465031185', '430826490', '333231596')
module V1
  module Repositories
    # List repository class params: username
    class List
      include FaradayConnection

      def initialize(search_param: nil, username: nil)
        @search_param = search_param.nil? ? '*' : search_param
        @user = User.find_by(login: username)
        raise StandardError 'User not found' if username.present? && @user.nil?
      rescue StandardError => e
        { error: e.message }
      end

      def search_repo
        Repository.search(
          @search_param,
          fields: %i[id name fullname html_url],
          where: conditions
        ).as_json.sort_by! { |x| Date.parse x['updated_at'] }.reverse
      end

      def conditions
        return {} if @user.nil?

        { user_id: [@user.id] }
      end
    end
  end
end
