import { useState } from "react";
import axios from "axios";
import React from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function search() {
    let apiKey = "3et61975bb6d4a4foabfddbded4a0a8e";
    let city = props.data.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleForecastResponse);
  }
  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <WeatherForecastDay data={forecast[1]} />
          <WeatherForecastDay data={forecast[2]} />
          <WeatherForecastDay data={forecast[3]} />
          <WeatherForecastDay data={forecast[4]} />
          <WeatherForecastDay data={forecast[5]} />
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
