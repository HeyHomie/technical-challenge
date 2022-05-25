# frozen_string_literal: true

email = 'dummy@test.com'
password = 'super_password'
User.create!(email: email, password: password)
auth_token = ActionController::HttpAuthentication::Basic.encode_credentials(email,password)

p "Authorization: #{auth_token}"
