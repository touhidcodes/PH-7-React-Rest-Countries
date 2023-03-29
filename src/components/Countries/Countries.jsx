import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);
	return (
		<div>
			<h1>React Rest Countries</h1>
			<h4>Available Countries: {countries.length}</h4>
			<div className='countries'>
				{countries.map((country) => (
					<Country country={country} key={country.cca3}></Country>
				))}
			</div>
		</div>
	);
};

export default Countries;
