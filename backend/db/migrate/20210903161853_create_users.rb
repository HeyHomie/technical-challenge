# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    reversible do |dir|
      dir.up do
        create_table :users do |t|
          t.string :login
          t.integer :github_id
          t.string :url
          t.string :name
          t.string :email
          t.string :avatar_url

          t.timestamps
        end
      end
      dir.down do
        drop_table :users
      end
    end
  end
end
