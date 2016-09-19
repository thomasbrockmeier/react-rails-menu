# README

Simple react-rails app, which uses a React UI on top of a Rails API

gem 'react-rails' is used to run React on the Rails server
gem 'responders' is used to generate a DRY API


The API is defined in the two controller files in ./app/controllers/api/v1, and in routes.rb

The React view is loaded from the 'site#index' action, and corresponding view

The React components are located in app/assets/javascripts/components

The components may communicate with the back end using AJAX requests to the API
