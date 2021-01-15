import React, { Component } from 'react';
import TodayInfoContainer from './TodayInfoContainer';
import WeekContainer from './WeekContainer';
import LocationContainer from './LocationContainer';
export class InfoSide extends Component {
	render() {
		return (
			<>
				<div className="info-side">
					<TodayInfoContainer />
					<WeekContainer />
					<LocationContainer />
				</div>
			</>
		);
	}
}

export default InfoSide;
