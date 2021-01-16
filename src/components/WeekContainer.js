import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import WeatherIcon from './WeatherIcon';

export default function WeekContainer() {
	const { weatherData } = useContext(WeatherContext);
	return (
		<div className="week-container">
			<ul className="week-list">
				<li className="active">
					<WeatherIcon weatherStatus={weatherData.result[1].status} iconName="day" />
					<span className="day-name">{weatherData.result[1].day}</span>
					<span className="day-temp">{weatherData.result[1].min}°C</span>
				</li>
				<li>
					<WeatherIcon weatherStatus={weatherData.result[2].status} iconName="day" />
					<span className="day-name">{weatherData.result[2].day}</span>
					<span className="day-temp">{weatherData.result[2].min}°C</span>
				</li>
				<li>
					<WeatherIcon weatherStatus={weatherData.result[3].status} iconName="day" />
					<span className="day-name">{weatherData.result[3].day}</span>
					<span className="day-temp">{weatherData.result[3].min}°C</span>
				</li>
				<li>
					<WeatherIcon weatherStatus={weatherData.result[4].status} iconName="day" />
					<span className="day-name">{weatherData.result[4].day}</span>
					<span className="day-temp">{weatherData.result[4].min}°C</span>
				</li>
				<li>
					<WeatherIcon weatherStatus={weatherData.result[5].status} iconName="day" />
					<span className="day-name">{weatherData.result[5].day}</span>
					<span className="day-temp">{weatherData.result[5].min}°C</span>
				</li>
				<li>
					<WeatherIcon weatherStatus={weatherData.result[6].status} iconName="day" />
					<span className="day-name">{weatherData.result[6].day}</span>
					<span className="day-temp">{weatherData.result[6].min}°C</span>
				</li>
				<div className="clear"></div>
			</ul>
		</div>
	);
}
