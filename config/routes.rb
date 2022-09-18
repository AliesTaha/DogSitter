Rails.application.routes.draw do
  apipie
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  #resources :users, only: [:create, :show]

  post "/api/v1/register", to: "user#create"
  post "/api/v1/login", to: "session#create"
  get '/api/v1/profile' => "user#show"
  get '/api/v1/profile/all' => "user#all_show"
  get '/api/v1/profile/:id' => "user#profile_id"
  get "/api/v1/logout", to: "session#destroy"
  post '/api/v1/profile' => "user#edit"
  post '/api/v1/pets/add' => 'pets#add'
  get '/api/v1/pets' => 'pets#private_show'
  get '/api/v1/public/pets' => 'pets#public_show'
  get '/api/v1/pets/:breed' => 'pets#custom_breed'
  scope '/api/v1/' do
    resources :pets, only: [:show, :update, :destroy]
  end

  get '/api/v1/socials' => 'social#show'
  get '/api/v1/:id/socials' => 'social#custom_show'
  post '/api/v1/socials' => 'social#add'
end
