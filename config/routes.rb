Rails.application.routes.draw do
  get 'projects/gol'

  get 'projects/ezbeats'

  get 'projects/dice'

  root to: 'visitors#index'
end
