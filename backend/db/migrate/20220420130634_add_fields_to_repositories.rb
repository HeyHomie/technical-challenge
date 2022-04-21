class AddFieldsToRepositories < ActiveRecord::Migration[6.1]
  def change
    add_column :repositories, :stargazers_count, :integer, null: true
    add_column :repositories, :license, :string, null: true
    add_column :repositories, :visibility, :string, null: true
    add_column :repositories, :topics, :string, array: true, default: nil, null: true
    add_column :repositories, :ssh_url, :string, null: true
    add_column :repositories, :clone_url, :string, null: true
    add_column :repositories, :forks_url, :string, null: true
    add_column :repositories, :languages_url, :string, null: true
    add_column :repositories, :language, :string, null: true
    add_column :repositories, :stargazers_url, :string, null: true
    add_column :repositories, :contributors_url, :string, null: true
    add_column :repositories, :subscribers_url, :string, null: true
    add_column :repositories, :subscription_url, :string, null: true
  end
end
