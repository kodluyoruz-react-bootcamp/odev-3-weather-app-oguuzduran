import { useContext } from 'react';
import InfoSide from './components/InfoSide';
import WeatherSide from './components/WeatherSide';

import WeatherContext from './context/WeatherContext';
export default function Container() {
	const { loading } = useContext(WeatherContext);
	return (
		<>
			{loading ? (
				<div>
					<h1 style={{ color: 'white' }}>Yükleniyor...</h1>
				</div>
			) : (
				<div className="container">
					<WeatherSide />
					<InfoSide />
				</div>
			)}
		</>
	);
}
