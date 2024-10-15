import "./WeatherCard.css";
import {DayWeather} from "../../../../types/types.ts";
import Characteristic from "../characteristic/Characteristic.tsx";

function WeatherCard(weather: DayWeather) {
    return (
      <div className={"weather-card"}>
          <h3>{weather.conditions}</h3>
          <h3>{weather.description}</h3>
          <Characteristic title={"Max"} value={weather.tempmax}/>
          <Characteristic title={"Min"} value={weather.tempmin}/>
          <Characteristic title={"Wind speed"} value={weather.windspeed}/>
          <Characteristic title={"Wind speed"} value={weather.windspeed}/>
          <Characteristic title={"Visibility"} value={weather.visibility}/>
          <Characteristic title={"Pressure"} value={weather.pressure}/>
          <Characteristic title={"Humidity"} value={weather.humidity}/>
      </div>
    );
}

export default WeatherCard;
