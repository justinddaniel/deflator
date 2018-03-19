class Food < ApplicationRecord
	has_many :daily_foods 
	has_many :days, through: :daily_foods
end