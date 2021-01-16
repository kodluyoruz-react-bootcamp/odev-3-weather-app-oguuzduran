import React, { useContext } from 'react';
import Select from 'react-select';
import CityContext from '../context/CityContext';
import WeatherContext from '../context/WeatherContext';

export default function SelectBox() {
	const { city } = useContext(CityContext);
	const { setSelectCity } = useContext(WeatherContext);

	let options = [];

	city.map((citys) => options.push({ value: citys.name, label: citys.name }));

	const getSelectCity = (e) => {
		setSelectCity(e.value);
	};

	return (
		<div>
			<Select options={options} onChange={(e) => getSelectCity(e)} />
		</div>
	);
}
