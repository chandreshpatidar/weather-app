import React from 'react';

function WeatherCard({ weatherData }) {
  const { name, main, weather } = weatherData;

  return (
    <div className='weather-card'>
      <h2>{name}</h2>
      <div className='weather-info'>
        <p>Temperature: {main.temp}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Description: {weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
