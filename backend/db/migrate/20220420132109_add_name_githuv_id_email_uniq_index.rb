class AddNameGithuvIdEmailUniqIndex < ActiveRecord::Migration[6.1]
  def change
    add_index :users, %i[login email], unique: true, name: 'unique_login_email'
  end
end
