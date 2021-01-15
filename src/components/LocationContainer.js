import React, { Component } from 'react';

export class LocationContainer extends Component {
	render() {
		return (
			<>
				<div className="location-container">
					<button className="location-button">
						{' '}
						<i data-feather="map-pin"></i>
						<span>Change location</span>
					</button>
				</div>
			</>
		);
	}
}

export default LocationContainer;
