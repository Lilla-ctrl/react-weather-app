import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  console.log(props.icon);
  return (
    <div className="col">
      <div className="Forecast-day">Thu</div>{" "}
      <WeatherIcon code={props.data.icon} alt={props.data.description} />{" "}
      <div className="Forecast-temperature">
        <span className="Forecast-temperature-max">
          {Math.round(props.data.tempmax)}
        </span>{" "}
        <span className="Forecast-temperature-min">
          {Math.round(props.data.tempmin)}
        </span>
      </div>
    </div>
  );
}
