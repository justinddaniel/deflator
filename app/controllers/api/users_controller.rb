class Api::UsersController < ApplicationController

	def index
		@users = User.all
		render json: @users 
	end
end

#With the code above Rails and React now communicate with each other and React can render users objects. 