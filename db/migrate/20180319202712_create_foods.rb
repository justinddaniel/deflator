class CreateFoods < ActiveRecord::Migration[5.1]
  def change
    create_table :foods do |t|
    	t.string :name
    	t.float :calories_per_serv
    	t.float :servings
    	t.integer :nutrition_rating
    	t.integer :fulfillment_rating
    end
  end
end
