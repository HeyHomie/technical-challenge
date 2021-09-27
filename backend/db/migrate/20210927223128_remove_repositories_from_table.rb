class RemoveRepositoriesFromTable < ActiveRecord::Migration[6.1]
  def change
    change_table :users do |t|
      t.remove :repositories
    end
  end
end
