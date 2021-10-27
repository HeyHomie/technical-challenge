# frozen_string_literal: true

class CreateRepos < ActiveRecord::Migration[6.1]
  def change
    create_table :repos do |t|
      t.bigint :github_id
      t.string :name
      t.jsonb :data
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
