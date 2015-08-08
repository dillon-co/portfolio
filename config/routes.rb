Rails.application.routes.draw do
  get 'projects/gol'

  get 'projects/ezbeats'

  get 'projects/dice'

  get 'projects/game'

  root to: 'visitors#index'

  get '*path' => 'application#index'
end
