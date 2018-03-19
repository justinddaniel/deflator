class CreateExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :exercises do |t|
    	t.string :name
    	t.float :calories_bpm
    	t.integer :fun_rating
    end
  end
end
