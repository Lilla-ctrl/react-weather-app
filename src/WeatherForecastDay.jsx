export default function WeatherForecastDay(props) {
  return (
    <div className="col">
      <div className="Forecast-day">Thu</div> Icon{" "}
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
