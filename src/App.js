import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

function App() {
  const [weatherData, setWeatherdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('https://mm214.com/demo.php');
    const data = await response.json();
    // console.log(data);
    setWeatherdata(data);
  };
  console.log(weatherData);
  if (weatherData.length == 0) {
    return <h1> Waiting for Data</h1>;
  } else {
    return (
      <div className="App">
        <Card data={weatherData} />
      </div>
    );
  }
}

export default App;
