class CreateRepositories < ActiveRecord::Migration[6.1]
  def change
    create_table :repositories do |t|
      t.integer :repo_id, limit: 8
      t.string :name
      t.string :full_name
      t.boolean :private
      t.jsonb :owner
      t.string :html_url
      t.string :visibility
      t.integer :user_id

      t.timestamps
    end
  end
end
