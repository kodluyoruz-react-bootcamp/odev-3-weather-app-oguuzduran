import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

export default function TodayInfoContainer() {
	const { weatherData } = useContext(WeatherContext);
	return (
		<>
			<div className="today-info-container">
				<div className="today-info">
					<div className="precipitation">
						{' '}
						<span className="title">MIN</span>
						<span className="value">{weatherData.result[0].min}°C</span>
						<div className="clear"></div>
					</div>
					<div className="humidity">
						{' '}
						<span className="title">MAX</span>
						<span className="value">{weatherData.result[0].max}°C</span>
						<div className="clear"></div>
					</div>
					<div className="wind">
						{' '}
						<span className="title">HUMIDITY</span>
						<span className="value">{weatherData.result[0].humidity} %</span>
						<div className="clear"></div>
					</div>
				</div>
			</div>
		</>
	);
}
