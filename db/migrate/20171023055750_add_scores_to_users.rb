class AddScoresToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :scores, :jsonb, default: []
  end
end
