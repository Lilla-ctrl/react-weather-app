import React from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <WeatherForecastDay />
        <WeatherForecastDay />
        <WeatherForecastDay />
        <WeatherForecastDay />
        <WeatherForecastDay />
      </div>
    </div>
  );
}
