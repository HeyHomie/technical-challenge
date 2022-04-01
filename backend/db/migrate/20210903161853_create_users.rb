# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.integer :github_id, limit: 8
      t.string :login
      t.string :url
      t.string :name
      t.string :email
      t.string :avatar_url
      # t.jsonb :repositories

      t.timestamps
    end
  end
end
