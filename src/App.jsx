import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Countries></Countries>
		</div>
	);
}

function Countries() {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);
	return (
		<div>
			<h1>React Rest Countries</h1>
			<p>Available Countries: {countries.length}</p>
		</div>
	);
}

export default App;
