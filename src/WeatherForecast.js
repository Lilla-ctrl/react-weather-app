import { useState } from "react";
import axios from "axios";
import React from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);

  function search() {
    let apiKey = "3et61975bb6d4a4foabfddbded4a0a8e";
    let city = props.data.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleForecastResponse);
  }
  function handleForecastResponse(response) {
    setForecastWeatherData({
      ready: true,
      tempmin: response.data.daily[0].temperature.minimum,
      tempmax: response.data.daily[0].temperature.maximum,
      date: new Date(response.data.daily[0].time * 1000),
      icon: response.data.daily[0].condition.icon,
      description: response.data.daily[0].condition.description,
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <WeatherForecastDay data={forecastWeatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
