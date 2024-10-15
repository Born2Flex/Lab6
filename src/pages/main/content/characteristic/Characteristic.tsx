import "./Characteristic.css";
import {CharacteristicData} from "../../../../types/types.ts";


function Characteristic({title, value, temperature, windSpeed, visibility, percent, pressure}: CharacteristicData) {
    return (
        <div className={"field"}>
            <h3>{title}:&nbsp;</h3>
            <p>{value} {temperature && "°C"} {windSpeed && "km/h"} {visibility && "km"} {pressure && "mb"} {percent && "%"}</p>
        </div>
    );
}

export default Characteristic;
