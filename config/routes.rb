Rails.application.routes.draw do
    namespace :api do
      namespace :v1 do
        resources :menu_categories, only: [:index, :create, :destroy, :update]
      end
    end
    root 'site#index'
  end
