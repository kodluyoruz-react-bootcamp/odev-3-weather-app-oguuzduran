import './App.css';
import InfoSide from './components/InfoSide';
import WeatherSide from './components/WeatherSide';
function App() {
	return (
		<>
			<div className="container">
				<WeatherSide />
				<InfoSide />
			</div>
		</>
	);
}

export default App;
