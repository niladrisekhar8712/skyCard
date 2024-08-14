import logo from './logo.svg';
import './App.css';
import WeatherApp from './components/WeatherApp';
import React, { useState } from 'react';


// isDay, lat, lon, temperature, forecastList, weather, 
//     currentIcon, feelsLike, humidity, visibility, windSpeed, 
//     windDirection, pressure, cloud, dailyForecast, riseTime, 
//     setTime, uv, localtime


function App() {

  
  return (
    <>
      <WeatherApp />
    </>
  );
}

export default App;
