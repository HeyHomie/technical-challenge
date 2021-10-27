class RemoveRepositoriesFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :repositories, :jsonb
  end
end
