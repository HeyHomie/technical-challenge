# frozen_string_literal: true

class CreateRepositories < ActiveRecord::Migration[6.1]
  def change
    create_table :repositories do |t|
      t.integer :user_id
      t.string :name
      t.boolean :private
      t.string :url
      t.text :description
      t.string :language

      t.timestamps
    end
  end
end
