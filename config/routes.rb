Rails.application.routes.draw do
  namespace :api do
  	root 'users#index'

  	resources :users
  end
end
