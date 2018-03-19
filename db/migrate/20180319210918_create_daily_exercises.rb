class CreateDailyExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :daily_exercises do |t|
    	t.integer :day_id
    	t.integer :exercise_id
    	t.integer :time
    end
  end
end
