import React, { useState } from 'react';
import axios from 'axios';

const WEATHER_API_KEY = 'YOUR_WEATHER_API_KEY'; // Replace with your weather API key
const MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your Google Maps API key

const API_URL_WEATHER = 'https://api.openweathermap.org/data/2.5/weather';
const API_URL_MAPS = 'https://maps.googleapis.com/maps/api/geocode/json';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getGeolocation = async () => {
    try {
      const response = await axios.get(`${API_URL_MAPS}?address=${city}&key=${MAPS_API_KEY}`);
      const location = response.data.results[0].geometry.location;
      getWeatherData(location.lat, location.lng);
    } catch (error) {
      console.error('Error fetching geolocation data:', error);
    }
  };

  const getWeatherData = async (lat, lng) => {
    try {
      const response = await axios.get(`${API_URL_WEATHER}?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getGeolocation}>Get Weather</button>

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} K</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
