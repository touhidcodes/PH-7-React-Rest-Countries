import React from "react";
import "./Country.css";

const Country = (props) => {
	console.log(props.country);
	const { name, capital, flags, population } = props.country;
	return (
		<div className='country'>
			<h2>{name.common}</h2>
			<img src={flags.png} alt={name.common} />
			<h3>Capital: {capital}</h3>
			<h3>Population: {population}</h3>
		</div>
	);
};

export default Country;
