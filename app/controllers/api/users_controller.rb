class Api::UsersController < ApplicationController

	skip_before_action :verify_authenticity_token

	def index
		@users = User.all
		render json: @users 
	end

	def create
		@user = User.new(user_params)
		if @user.save
			render json: @user 
		else
			render json: { errors: {message: "this user could not be saved."}}
		end
	end

	def show 
		@user = User.find(:id => params[:id])
	end	


	def edit 
		@user = User.find(:id => params[:id])
	end

private

	def user_params
		params.require(:user).permit(:name, :weight, :height, :bmi, :weekly_target, :weight_goal, :calorie_allot)
	end
end
