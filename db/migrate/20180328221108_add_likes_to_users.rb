class AddLikesToUsers < ActiveRecord::Migration[5.1]
  def change
  	add_column :users, :likes, :integer, :default => 0
  end
end
