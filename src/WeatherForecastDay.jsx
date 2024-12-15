export default function WeatherForecastDay(props) {
  <div className="col">
      <div className="Forecast-day">Thu</div> Icon{" "}
      <div className="Forecast-temperature">
        <span className="Forecast-temperature-max">
         {props.data.tempmax}
        </span>{" "}
        <span className="Forecast-temperature-min">{props.data.tempmin}</span>
      </div>
    </div>
}
