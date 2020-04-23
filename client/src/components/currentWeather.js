import React from 'react';
import { farenheitToCelcius } from "../utils/unitConversion";
import { metersToMiles } from "../utils/unitConversion";

const CurrentWeather = (props) =>{
    const { city, state, currentWeather } = props;

    if (!currentWeather) {
        return (<div className="loading">isLoading...</div>);
    } else {
        const url = "http://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png";
        return (
            <div className="current">
                <p className="w_location">{city}, {state}</p>
                <p className="w_desc">{currentWeather.weather[0].description}</p>
                <p className="w_temp">{farenheitToCelcius(currentWeather.temp)}°C</p>
                <p className="w_icon"><img src={url} alt={currentWeather.weather[0].description}/></p>
                <div className="w_summary">
                    <div>Feels like: {farenheitToCelcius(currentWeather.feels_like)}°C</div>
                    <div>Humidity: {currentWeather.humidity}%</div>
                    <div>Visibility:  {metersToMiles(currentWeather.visibility)} miles</div>
                    <div>Wind Speed: {currentWeather.wind_speed} miles/hour</div>
                </div>
            </div>
        );
    }
};

export default CurrentWeather;