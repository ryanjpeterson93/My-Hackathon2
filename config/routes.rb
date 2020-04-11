Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users do
      resources :books
    end
  
    resources :users do
      resources :movies
    end

    resources :users do
      resources :artists
    end

    get 'books/all_books', :to => 'books#all_books'
    get 'movies/all_movies', :to => 'movies#all_movies'
    get 'artists/all_artists', :to => 'artists#all_artists'

  end
end
