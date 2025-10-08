import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate timezone={props.data.timezone} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-sm-6">
          <div className="d-flex">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
{            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} unit={props.unit} setUnit={props.setUnit} />
            </div>}
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
