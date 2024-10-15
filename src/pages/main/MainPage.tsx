import { createContext, useEffect, useState } from "react";
import Background from "../common-components/background/Background";
import NavBar from "./navbar/NavBar";
import { MainContextType, WeatherData } from "../../types/types";
import WeatherBlock from "./content/WeatherBlock";
import Loader from "./content/loader/Loader";

export const MainContext = createContext<MainContextType | null>(null);

function MainPage() {
    const [language, setLanguage] = useState<string>('en');
    const [data, setData] = useState<WeatherData | null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData(lat: number, lon: number) {
            try {
                const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/next5days?unitGroup=metric&lang=${language}&key=${import.meta.env.VITE_APP_ID}&include=days&elements=tempmax,tempmin,conditions,description,pressure,humidity,visibility,winddir,windspeed,datetime,sunrise,sunset`;
                console.log(url);
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setData(data);
                setLoaded(true);
            } catch (error) {
                console.log(error);
            }
        }

        function handlePosition(position: GeolocationPosition) {
            const { latitude, longitude } = position.coords;
            console.log(`${latitude} ${longitude}`);
            fetchData(latitude, longitude);
        }

        function handleError(error: GeolocationPositionError) {
            console.log('Location access denied or error occurred:', error);
            console.log('Using default location: 40.7128, -74.006');
            fetchData(40.7128, -74.006);
        }

        navigator.geolocation.getCurrentPosition(handlePosition, handleError);
    }, [language]);

    return (
        <MainContext.Provider value={{ language, setLanguage, setLoaded }}>
            <Background type={"dashboard"}>
                <NavBar />
                {loaded ? <WeatherBlock {...data} /> : <Loader />}
            </Background>
        </MainContext.Provider>
    );
}

export default MainPage;
