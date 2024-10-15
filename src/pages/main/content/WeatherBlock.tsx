import "./WeatherBlock.css";
import {WeatherData} from "../../../types/types.ts";
import WeatherCard from "./card/WeatherCard.tsx";

function WeatherBlock(data: WeatherData) {
    return (
        <div className={"days-container"}>
            {
                data.days.map((day, index) => (
                    <WeatherCard key={index} {...day}/>
                ))
            }
        </div>
    );
}

export default WeatherBlock;
