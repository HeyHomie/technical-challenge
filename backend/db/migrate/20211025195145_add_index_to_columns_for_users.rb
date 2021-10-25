# frozen_string_literal: true

class AddIndexToColumnsForUsers < ActiveRecord::Migration[6.1]
  def change
    add_index :users, :login, unique: true
    add_index :users, :github_id, unique: true
  end
end
