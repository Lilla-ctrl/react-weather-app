import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }



  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
