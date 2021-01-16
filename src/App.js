import { WeatherProvider } from './context/WeatherContext';
import Container from './Container';
import './App.css';

function App() {
	return (
		<WeatherProvider>
			<Container />
		</WeatherProvider>
	);
}

export default App;
