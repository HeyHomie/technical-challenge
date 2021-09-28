# frozen_string_literal: true

class CreateRepositories < ActiveRecord::Migration[6.1]
  def change
    create_table :repositories do |t|
      t.integer :github_id
      t.string :url
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.boolean :fork
      t.text :description
      t.string :language
      t.integer :stars
      t.integer :forks
      t.string :license
      t.datetime :last_updated
      t.boolean :archived
      t.boolean :private

      t.timestamps
    end
  end
end
