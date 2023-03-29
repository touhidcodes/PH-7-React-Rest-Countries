import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.flag} alt={props.name} />
            <h3>Capital: {props.capital}</h3>
            <h3>Population: {props.population}</h3>
        </div>
    );
};

export default Country;