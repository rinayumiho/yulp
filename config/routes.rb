Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :show] do 
      resources :reviews, only: [:show, :create, :index, :update, :destroy]
    end
    resources :usefuls, only: [:create, :destroy]
    resources :funnies, only: [:create, :destroy]
    resources :cools, only: [:create, :destroy]
    resources :saves, only: [:create, :destroy]
  end
end
