import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div className="col">
      <div className="Forecast-day">
        {props.data.time}
      </div>{" "}
      <WeatherIcon
        code={props.data.condition.icon}
        alt={props.data.condition.description}
        size={36}
      />{" "}
      <div className="Forecast-temperature">
        <span className="Forecast-temperature-max">
          {Math.round(props.data.temperature.maximum)}
        </span>{" "}
        <span className="Forecast-temperature-min">
          {Math.round(props.data.temperature.minimum)}
        </span>
      </div>
    </div>
  );
}
