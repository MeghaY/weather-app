import React from 'react';
import { farenheitToCelcius, dateConversion } from "../utils/unitConversion";

const WeeklyWeather = (props) => {
    const { weeklyWeather } = props;

    if (!weeklyWeather) {
        return null;
    } else {
        weeklyWeather.splice(-1);
        return (
            <ul className="weekly">
                { weeklyWeather.map(day => {
                    let weekday = dateConversion(day.dt);
                    const url = "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png";

                    return (<li key={day.dt} className="weekday">
                        <p>{weekday}</p>
                        <img src={url} alt={day.weather[0].description}/>
                        <p>{farenheitToCelcius(day.temp.max)}°C</p>
                        <p>{farenheitToCelcius(day.temp.min)}°C</p>
                    </li>);
                })}
            </ul>
        );
    }
};

export default WeeklyWeather;