Rails.application.routes.draw do
  get '/current_user', to: 'current_user#index'
  get '/user/:user_id', to: 'current_user#show'

  get '/cvs', to: 'cvs#index'
  get '/cvs/:user_id/:cv_id', to: 'cvs#show'
  get '/cvs/:user_id', to: 'cvs#list'

  resources :cvs
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  }, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
end
