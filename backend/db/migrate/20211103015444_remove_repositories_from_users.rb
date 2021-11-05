# frozen_string_literal: true

class RemoveRepositoriesFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :repositories, :string
  end
end
