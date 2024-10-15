import "./WeatherCard.css";
import {DayWeather} from "../../../../types/types.ts";
import Characteristic from "../characteristic/Characteristic.tsx";

function WeatherCard(weather: DayWeather) {
    return (
      <div className={"weather-card"}>
          <h1>{weather.dayName}</h1>
          <hr/>
          <img src={getWeatherImg(weather.conditions)} alt={"img"}/>
          <h2>{weather.conditions}</h2>
          <h3>{weather.description}</h3>
          <hr/>
          <div className={"characteristics-container"}>
              <Characteristic title={"Max"} value={weather.tempmax} temperature={true}/>
              <Characteristic title={"Min"} value={weather.tempmin} temperature={true}/>
              <Characteristic title={"Wind speed"} value={weather.windspeed} windSpeed={true}/>
              <Characteristic title={"Visibility"} value={weather.visibility} visibility={true}/>
              <Characteristic title={"Pressure"} value={weather.pressure} pressure={true}/>
              <Characteristic title={"Humidity"} value={weather.humidity} percent={true}/>
          </div>
      </div>
    );
}

const getWeatherImg = (conditions: string) => {
    switch (conditions.toLowerCase()) {
        case "rain":
        case "rain, overcast":
        case "rain, partially cloudy":
        case "дощ":
        case "дощ, невелика хмарність":
        case "дощ, похмуро":
        case "regen":
        case "regen, teilweise bewölkt":
        case "regen, bedeckt":
            return "src/assets/weather-icons/rain.png";
        case "overcast":
        case "хмарно":
        case "bewölkt":
            return "src/assets/weather-icons/cloud-cloud.png";
        case "clear":
        case "ясно":
        case "klar":
            return "src/assets/weather-icons/sunny.png";
        case "partially cloudy":
        case "мінлива хмарність":
        case "teilweise bewölkt":
            return "src/assets/weather-icons/cloud-sunny.png";
        default:
            return "src/assets/weather-icons/clouds.png";
    }
}

export default WeatherCard;
