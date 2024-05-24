"use client";
import styles from "../globals.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Gurugram,IN");
  const API_KEY = "5d0bbdc9e8704d37bc6d3673eb1e97aa";

  const fetchWeather = async () => {
    try {
      // Check if the city is not empty
      if (city.trim() !== "") {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      } else {
        setWeather(null);
      }
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };
  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div
      style={{
        display: "flex",
        marginTop: "10vh",
      }}
    >
      <h1>Whats Weather !</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
        />
      </form>
      {weather && (
        <div>
          <h2>
            {weather.name},{weather.sys.country}
          </h2>
          <img src={getWeatherIconUrl(weather.weather[0].icon)}></img>
          <p>
            {weather.weather[0].description.charAt(0).toUpperCase() +
              weather.weather[0].description.slice(1)}
          </p>

          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <p>
            Coordinates: {weather.coord.lat}, {weather.coord.lon}
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
