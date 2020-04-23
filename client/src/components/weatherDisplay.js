import React, { Component } from 'react';
import CurrentWeather from './currentWeather';
import axios from 'axios';
import WeeklyWeather from "./weeklyWeather";
import { getCities } from "../services/citiesService";
import Dropdown from "./common/Dropdown";

class WeatherDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: getCities(),
            selectedCity: {},
            weatherData: {},
            imgUrl: ''
        }
    }

    componentDidMount() {
        const city = this.state.cities[0];
        this.callCurrentWeatherApi(city.latitude, city.longitude)
            .then(res => this.setState({weatherData: Object.assign({}, res.weather), selectedCity:city}))
            .catch(err => console.log(err));
    }

    callCurrentWeatherApi = async (lat, lon) => {
        const response = await axios.get(`/api/getWeather?lat=${lat}&lon=${lon}`);
        if (response.status !== 200) throw Error(response.statusText);
        return response.data;
    };

    handleSelect = ({currentTarget: input}) => {
        const currentCity = this.state.cities.find(city => city.name === input.value);
        this.setState({selectedCity: currentCity});
        this.callCurrentWeatherApi(currentCity.latitude, currentCity.longitude)
            .then(res => this.setState({weatherData: Object.assign({}, res.weather), isLoading: true}))
            .catch(err => console.log(err));
    };

    render() {
            const { name: city, state} = this.state.selectedCity;

            return (
                <div className="weather-section">
                    <Dropdown options={this.state.cities} onChange={this.handleSelect}/>
                    <div className="w_weather_details">
                        <CurrentWeather city={city} state={state} currentWeather={this.state.weatherData.current}/>
                        <WeeklyWeather weeklyWeather={this.state.weatherData.daily}/>
                    </div>
                </div>
            );
    }
}

export default WeatherDisplay;