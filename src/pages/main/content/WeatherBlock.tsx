import "./WeatherBlock.css";
import {DayWeather, MainContextType, WeatherData} from "../../../types/types.ts";
import WeatherCard from "./card/WeatherCard.tsx";
import dayjs from "dayjs";
import {useContext} from "react";
import {MainContext} from "../MainPage.tsx";
import('dayjs/locale/de')
import('dayjs/locale/uk')

function WeatherBlock(data: WeatherData) {
    const context = useContext(MainContext);
    return (
        <div className={"days-container"}>
            {
                data.days.map((day, index) => {
                    const dayWeather: DayWeather = {...day};
                    dayWeather.dayName = getDayName(index, context);
                    return (
                    <WeatherCard key={index} {...dayWeather }/>
                )})
            }
        </div>
    );
}

export default WeatherBlock;

function getDayName(offset: number, context: MainContextType): string {
    if (context.language === 'en') {
        if (offset === 0) {
            return "Today";
        } else if (offset === 1) {
            return "Tomorrow";
        } else {
            return dayjs().add(offset, 'day').format("dddd");
        }
    } else if (context.language === 'uk') {
        if (offset === 0) {
            return "Сьогодні";
        } else if (offset === 1) {
            return "Завтра";
        } else {
           const day = dayjs().locale('uk').add(offset, 'day').format("dddd");
           return day.charAt(0).toLocaleUpperCase() + day.slice(1, day.length);
        }
    } else {
        if (offset === 0) {
            return "Heute";
        } else if (offset === 1) {
            return "Morgen";
        } else {
            return dayjs().locale('de').add(offset, 'day').format("dddd");
        }
    }
}
