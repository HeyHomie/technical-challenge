class AddFieldsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :company, :string, null: true
    add_column :users, :bio, :string, null: true
    add_column :users, :public_repos, :integer, null: true
    add_column :users, :followers, :integer, null: true
    add_column :users, :following, :integer, null: true
  end
end
