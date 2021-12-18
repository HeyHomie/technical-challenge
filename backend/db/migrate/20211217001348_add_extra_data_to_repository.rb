class AddExtraDataToRepository < ActiveRecord::Migration[6.1]
  def change
    add_column :repositories, :extra_data, :jsonb
  end
end
