class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
    	t.string :name
    	t.float :weight
    	t.float :height
    	t.float :bmi
    	t.float :weight_goal
    	t.float :weekly_target
    	t.integer :calorie_allot
    end
  end
end
