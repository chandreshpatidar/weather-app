import React, { useState } from 'react';
import './app.css';
import WeatherCard from './components/WeatherCard';
import CityTable from './components/CityTable';
import { OPEN_WEATHER_BASE_URL } from './config';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [geocodingData, setGeocodingData] = useState([]);

  const fetchGeoDetails = async () => {
    setLoading(true);

    try {
      const geocodedRes =
        await fetch(`${OPEN_WEATHER_BASE_URL}geo/1.0/direct?q=${city}&limit=10&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}
      `);

      const parsedGeoRes = await geocodedRes.json();

      setGeocodingData(parsedGeoRes);
    } catch (error) {
      setGeocodingData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      fetchGeoDetails();
    }
  };

  return (
    <div className='App'>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter city name'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type='submit'>Get City Details</button>
      </form>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          {error && <p>{error}</p>}
          {!!geocodingData.length && <CityTable cities={geocodingData} />}
          {weatherData && <WeatherCard weatherData={weatherData} />}
        </>
      )}
    </div>
  );
}

export default App;
