class CreateDailyFoods < ActiveRecord::Migration[5.1]
  def change
    create_table :daily_foods do |t|
    	t.integer :day_id
    	t.integer :food_id
    	t.float :servings
    end
  end
end
