class Day < ApplicationRecord
	belongs_to :journal 
	has_many :daily_foods 
	has_many :daily_exercises
	has_many :exercises, through: :daily_exercises
	has_many :foods, through: :daily_foods
end