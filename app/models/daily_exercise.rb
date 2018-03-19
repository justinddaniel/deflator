class DailyExercise < ApplicationRecord
	belongs_to :day 
	belongs_to :exercise
end