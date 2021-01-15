import React, { Component } from 'react';

export class TodayInfoContainer extends Component {
	render() {
		return (
			<>
				<div className="today-info-container">
					<div className="today-info">
						<div className="precipitation">
							{' '}
							<span className="title">PRECIPITATION</span>
							<span className="value">0 %</span>
							<div className="clear"></div>
						</div>
						<div className="humidity">
							{' '}
							<span className="title">HUMIDITY</span>
							<span className="value">34 %</span>
							<div className="clear"></div>
						</div>
						<div className="wind">
							{' '}
							<span className="title">WIND</span>
							<span className="value">0 km/h</span>
							<div className="clear"></div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default TodayInfoContainer;
