import "./Characteristic.css";
import {CharacteristicData} from "../../../../types/types.ts";


function Characteristic({title, value}: CharacteristicData) {
    return (
        <div className={"field"}>
            <h3>{title}:&nbsp;</h3>
            <p>{value}</p>
        </div>
    );
}

export default Characteristic;
