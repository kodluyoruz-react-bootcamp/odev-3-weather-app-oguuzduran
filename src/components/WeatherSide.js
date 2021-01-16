import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import WeatherIcon from './WeatherIcon';

export default function WeatherSide() {
	const { weatherData } = useContext(WeatherContext);

	return (
		<div className="weather-side">
			<div className="weather-gradient"></div>
			<div className="date-container">
				<h2 className="date-dayname">{weatherData.result[0].day}</h2>
				<span className="date-day">{weatherData.result[0].date}</span>
				<i className="location-icon" data-feather="map-pin"></i>
				<span className="location">{weatherData.city}</span>
			</div>
			<div className="weather-container">
				<WeatherIcon weatherStatus={weatherData.result[0].status} iconName="weather" />
				<h1 className="weather-temp">{weatherData.result[0].min}°C</h1>
				<h3 className="weather-desc">{weatherData.result[0].description}</h3>
			</div>
		</div>
	);
}
