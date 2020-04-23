import React from 'react';
import { farenheitToCelcius } from "../utils/unitConversion";


const WeeklyWeather = (props) => {
    const { weeklyWeather } = props;

    if (!weeklyWeather) {
        return null;
    } else {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        weeklyWeather.splice(-1);
        return (
            <ul className="weekly">
                { weeklyWeather.map(day => {
                    let date = new Date(day.dt * 1000);
                    let weekday = days[date.getDay()];
                    const url = "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png";

                    return (<li key={date.getDay()} className="weekday">
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