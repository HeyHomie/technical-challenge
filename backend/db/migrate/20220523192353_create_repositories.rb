class CreateRepositories < ActiveRecord::Migration[6.1]
  def change
    create_table :repositories do |t|
      t.string      :name, null: false
      t.integer      :github_id, limit: 8
      t.string      :url
      t.string      :git_url
      t.boolean     :fork
      t.text        :description
      t.string      :visibility
      t.boolean     :private
      t.string      :ssh_url
      t.string      :contents_url
      t.belongs_to  :owner, through: :users, null: false

      t.timestamps
    end

    add_foreign_key(:repositories, :users, column: :owner_id)
  end
end
