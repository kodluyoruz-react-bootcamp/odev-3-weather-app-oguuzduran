import { createContext, useState, useEffect } from 'react';
import CityList from './CityList';

const CityContext = createContext(null);

export const CityProvider = ({ children }) => {
	const [city, setCity] = useState([]);

	useEffect(() => {
		setCity(CityList.city);
	}, [city]);
	const values = {
		city,
	};

	return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export default CityContext;
