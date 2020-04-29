# React Weather App 

## Steps to Clone and run the app
1. Clone the project using the git project url and  `git clone` command
2. Once cloned, first run `npm install` on the root folder which will install the server dependencies in the node_modules folder
3. Go to `root/client` directory and run `npm install` inside client directory which will install the necessary client side node dependencies and will create node_modules folder
4. To run this app, replace the `apiKey` constant variable with your actual openweatherMap API key (more on that below).
5. if everything configured properly, run `npm start` which will start both your server and client concurrently and will host the application on `http://localhost:3000/`

## OpenweatherMap Api setup
This weather app uses Open Weather Api [https://openweathermap.org/](https://openweathermap.org/) to get Current weather and forecasted weekly weather.
- For OpenWeatherMap API, create a free developer account on the website and register your app. You will get the API key which you can use to make a call to get data for different endpoints
- Once you have the api key, you can replace apiKey variable in `server.js` file with your actual API key.

## Features of this app
- This app is using oneCall api to get current and weekly weather data.
- I have a selected list of cities name populated in the dropdown using the service that I have created, it uses the latitude, longitude coordinates in the endpoint
- Nice Component based UI for displaying Today's weather and weekly weather forecast 
- It is using axios to make a an http request along with async/await

## Future changes
- code refactoring/simplifying
- Replacing the hardcoded service with storing data in Mongodb database
- Adding hourly forecast information
- unit tests and integration tests

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


