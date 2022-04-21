class RemoveGithubIdFormUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :github_id
  end
end
