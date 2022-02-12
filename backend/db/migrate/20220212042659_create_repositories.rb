# frozen_string_literal: true

class CreateRepositories < ActiveRecord::Migration[6.1]
  def change
    reversible do |dir|
      dir.up do
        create_table :repositories do |t|
          t.integer :github_id
          t.string :name
          t.string :full_name
          t.integer :forks
          t.boolean :private
          t.integer :open_issues
          t.references :user, foreign_key: true

          t.timestamps
        end
      end
      dir.down do
        drop_table :repositories
      end
    end
  end
end
