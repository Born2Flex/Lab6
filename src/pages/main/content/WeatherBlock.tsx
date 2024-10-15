import "./WeatherBlock.css";
import {DayWeather, MainContextType, WeatherData} from "../../../types/types.ts";
import WeatherCard from "./card/WeatherCard.tsx";
import dayjs from "dayjs";
import {useContext} from "react";
import {MainContext} from "../MainPage.tsx";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";
import('dayjs/locale/de')
import('dayjs/locale/uk')
dayjs.extend(utc);
dayjs.extend(tz);

function WeatherBlock({days, timezone, tzoffset}: WeatherData) {
    const context = useContext(MainContext);
    if (!context) {
        console.log("Something is wrong, context is null");
    }
    return (
        <div className={"main-container"}>
            <div className={"country-data"}>
                <div><h1>Location:&nbsp;</h1> <p>{timezone}</p></div>
                <div className={"short-info"}>
                    <div>
                        <h2>Time:&nbsp;&nbsp;</h2>
                        <h2>Sunrise:&nbsp;&nbsp;</h2>
                        <h2>Sunset:&nbsp;&nbsp;</h2>
                    </div>
                    <div>
                        <h2>{dayjs.utc().add(tzoffset, 'hour').format('').slice(11,-4)}</h2>
                        <h2>{days[0].sunrise.slice(0, -3)}</h2>
                        <h2>{days[0].sunset.slice(0, -3)}</h2>
                    </div>
                </div>
            </div>
            <div className={"days-container"}>
                {
                    days.map((day, index) => {
                        const dayWeather: DayWeather = {...day};
                        if (context) {
                            dayWeather.dayName = getDayName(index, context);
                        }
                        return (
                            <WeatherCard key={index} {...dayWeather}/>
                        )
                    })
                }
            </div>
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
            return dayjs().add(offset, 'day').format("ddd DD MMM");
        }
    } else if (context.language === 'uk') {
        if (offset === 0) {
            return "Сьогодні";
        } else if (offset === 1) {
            return "Завтра";
        } else {
            const day = dayjs().locale('uk').add(offset, 'day').format("ddd DD MMM");
            return day.charAt(0).toLocaleUpperCase() + day.slice(1, day.length);
        }
    } else {
        if (offset === 0) {
            return "Heute";
        } else if (offset === 1) {
            return "Morgen";
        } else {
            return dayjs().locale('de').add(offset, 'day').format("ddd DD MMM");
        }
    }
}
