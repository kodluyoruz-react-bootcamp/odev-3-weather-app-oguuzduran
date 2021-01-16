import { Component } from 'react';

export class WeatherIcon extends Component {
	render() {
		let weatherStatus = this.props.weatherStatus;
		let iconName = this.props.iconName;
		return (
			<>
				{weatherStatus === 'Rain' ? (
					<i className={`${iconName}-icon`} data-feather="cloud-rain"></i>
				) : (
					''
				)}
				{weatherStatus === 'Snow' ? (
					<i className={`${iconName}-icon`} data-feather="cloud-snow"></i>
				) : (
					''
				)}
				{weatherStatus === 'Clouds' ? (
					<i className={`${iconName}-icon`} data-feather="cloud"></i>
				) : (
					''
				)}
				{weatherStatus === 'Clear' ? <i className={`${iconName}-icon`} data-feather="sun"></i> : ''}
			</>
		);
	}
}

export default WeatherIcon;
