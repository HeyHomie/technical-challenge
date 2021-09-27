class CreateRepositories < ActiveRecord::Migration[6.1]
  def change
    create_table :repositories do |t|
      t.integer :user_id
      t.string :name
      t.string :full_name
      t.string :description
      t.string :html_url

      t.timestamps
    end
  end
end
