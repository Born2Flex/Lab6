import {createContext, useEffect, useState} from "react";
import Background from "../common-components/background/Background";
import NavBar from "./navbar/NavBar";
import {MainContextType, WeatherData} from "../../types/types.ts";
import WeatherBlock from "./content/WeatherBlock.tsx";
import Loader from "./content/loader/Loader.tsx";

export const MainContext = createContext<MainContextType | null>(null);
function MainPage() {
    const [language, setLanguage] = useState<string>('en');
    const [data, setData] = useState<WeatherData | null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
         async function fetchData(lat: number, lon: number) {
             try {
                 setTimeout(async () => {
                     const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/next5days?unitGroup=metric&lang=${language}&key=${import.meta.env.VITE_APP_ID}&include=days&elements=tempmax,tempmin,conditions,description,pressure,humidity,visibility,winddir,windspeed,datetime,sunrise,sunset`
                     console.log(url);
                     const response = await fetch(url);
                     const data = await response.json();
                     console.log(data);
                     setData(data);
                     setLoaded(true);
                 }, 1000);
             } catch (error) {
                 console.log(error);
             }
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                console.log(`${latitude} ${longitude}`)
                fetchData(latitude, longitude);
            },
            (error) => {
                console.log('Location access denied or error occurred:', error);
                console.log('40.7128 -74.006');
                fetchData(40.7128, -74.006);
            }
        );
    }, [language, loaded]);

    return (
        <MainContext.Provider value={{language, setLanguage, setLoaded}}>
            <Background type={"dashboard"}>
                <NavBar />
                { loaded? <WeatherBlock {...data} /> : <Loader/> }
            </Background>
        </MainContext.Provider>
    );
}

export default MainPage;
