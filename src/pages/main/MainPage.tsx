import {createContext, useEffect, useState} from "react";
import Background from "../common-components/background/Background";
import NavBar from "./navbar/NavBar";
import {MainContextType, WeatherData} from "../../types/types.ts";

export const MainContext = createContext<MainContextType | null>(null);
function MainPage() {
    const [language, setLanguage] = useState<string>('en');
    const [data, setData] = useState<WeatherData | null>(null);

    useEffect(() => {
         async function fetchData(lat: number, lon: number) {
             try {
                 const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/next5days?unitGroup=metric&lang=${language}&key=${import.meta.env.VITE_APP_ID}&include=days&elements=tempmax,tempmin,conditions,description,pressure,humidity,visibility,winddir,windspeed`
                 console.log(url);
                 const response = await fetch(url);
                 const data = await response.json();
                 console.log(data);
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
    }, [language]);

    return (
        <MainContext.Provider value={{language, setLanguage}}>
            <Background type={"dashboard"}>
                <NavBar />
            </Background>
        </MainContext.Provider>
    );
}

export default MainPage;
