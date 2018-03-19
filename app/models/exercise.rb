class Exercise < ApplicationRecord
	has_many :daily_exercises
	has_many :days, through: :daily_exercises
end