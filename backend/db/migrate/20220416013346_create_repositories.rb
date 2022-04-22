class CreateRepositories < ActiveRecord::Migration[6.1]
  def change
    create_table :repositories do |t|
      t.string :node_id
      t.string :name
      t.string :full_name
      t.boolean :private
      t.string :html_url
      t.text :description
      t.integer :forks_count
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
