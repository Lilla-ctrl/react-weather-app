import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function formatDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="col">
      <div className="Forecast-day">{formatDay()}</div>{" "}
      <WeatherIcon
        code={props.data.condition.icon}
        alt={props.data.condition.description}
        size={36}
      />{" "}
      <div className="Forecast-temperature">
        <span className="Forecast-temperature-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>{" "}
        <span className="Forecast-temperature-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
