import React, { useEffect } from 'react';

function Card(prop) {
  // console.log(prop);
  let data = prop.data;
  let weather = data.weather[0];
  let main = data.main;

  return (
    <div className="card col-12 col-md-6">
      <h1>Weather for {data.name}</h1>
      <p>Description: {weather.description}</p>
      <p>Temp: {main.temp}</p>
      <p>Max Temp: {main.temp_max}</p>
      <p>Min Temp: {main.temp_min}</p>
    </div>
  );
}

export default Card;
