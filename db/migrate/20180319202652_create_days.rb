class CreateDays < ActiveRecord::Migration[5.1]
  def change
    create_table :days do |t|
    	t.string :title
    	t.date :date
    	t.integer :journal_id
    	t.integer :calorie_allot
    	t.integer :calories_consumed
    	t.integer :calories_burned
    	t.integer :net_calories
    end
  end
end
