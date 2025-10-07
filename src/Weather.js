import { useCallback, useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  async function fetchTimezone(coordinates) {
    const { latitude, longitude } = coordinates;
    const apiKey = "XY4MU30QAOSW";

    try {
      const res = await fetch(
        `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${latitude}&lng=${longitude}`
      );
      const data = await res.json();
      console.log("TimeZoneDB response:", data);
      return data.zoneName || "UTC";
    } catch (err) {
      console.error("Timezone fetch error:", err);
      return "UTC";
    }
  }

  async function handleResponse(response) {
    const coordinates = response.data.coordinates;
    const zoneName = await fetchTimezone(coordinates);

    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      coordinates,
      timezone: zoneName,
    });
  }

  function search() {
    let apiKey = "3et61975bb6d4a4foabfddbded4a0a8e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  const searchLocation = useCallback((position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "3et61975bb6d4a4foabfddbded4a0a8e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        setWeatherData({ ready: false });
        alert("Too many attempts - please try again in a moment.");
        console.error("API error:", error);
      });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(searchLocation);
  }, [searchLocation]);

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city!"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="row mt-3">
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-secondary w-100"
                />
              </div>
              <div className="col-3">
                <input
                  type="button"
                  value="Location"
                  className="btn btn-secondary w-100"
                  onClick={handleLocation}
                />
              </div>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData} />
      </div>
    );
  } else {
    return "Loading...";
  }
}
