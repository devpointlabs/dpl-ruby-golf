Rails.application.routes.draw do
  root 'static#index'
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    get 'scores', to: 'scores#index'
    post 'scores', to: 'scores#create'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
