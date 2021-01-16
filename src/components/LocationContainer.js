import React from 'react';
import { CityProvider } from '../context/CityContext';
import SelectBox from './SelectBox';

export default function LocationContainer() {
	return (
		<>
			<CityProvider>
				<div className="location-container">
					<SelectBox />
				</div>
			</CityProvider>
		</>
	);
}
