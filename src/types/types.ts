import {ChangeEventHandler, MouseEventHandler} from "react";

export type MainContextType = {
    language: string;
    setLanguage: (language: string) => void;
}

export type Option = {
    value: string;
    text: string;
}

export type Options = {
    options: Option[],
    handler: ChangeEventHandler<HTMLSelectElement>,
}


export type ButtonData = {
    title: string,
    handler: MouseEventHandler<HTMLButtonElement>,
}

export type DayWeather = {
    tempmax: number;
    tempmin: number;
    windspeed: number;
    winddir: number;
    pressure: number;
    visibility: number;
    humidity: number;
    conditions: string;
    description: string;
    dayName: string;
};

export type WeatherData = {
    queryCost: number;
    latitude: number;
    longitude: number;
    resolvedAddress: string;
    address: string;
    timezone: string;
    tzoffset: number;
    days: DayWeather[];
};

export type CharacteristicData = {
    title: string,
    value: string | number,
    temperature?: boolean,
    windSpeed?: boolean,
    visibility?: boolean,
    pressure?: boolean,
    percent?: boolean,
}
