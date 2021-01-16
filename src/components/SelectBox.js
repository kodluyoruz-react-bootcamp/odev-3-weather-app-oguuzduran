import React, { useContext } from 'react';
import Select from 'react-select';
import CityContext from '../context/CityContext';
import WeatherContext from '../context/WeatherContext';

export default function SelectBox() {
	const { city } = useContext(CityContext);
	const { selectCity, setSelectCity } = useContext(WeatherContext);

	let options = [];

	city.map((citys) => options.push({ value: citys.name, label: citys.name }));

	const getSelectCity = (e) => {
		setSelectCity({ value: e.value, label: e.value });
	};
	const CustomStyle = {
		option: (base, state) => ({
			...base,
			backgroundColor: 'white',
			color: 'black',
		}),
	};
	return (
		<div>
			<Select
				options={options}
				onChange={(e) => getSelectCity(e)}
				styles={CustomStyle}
				defaultValue={selectCity}
			/>
		</div>
	);
}
