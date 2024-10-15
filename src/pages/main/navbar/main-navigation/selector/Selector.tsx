import "./Selector.css";
import {Options} from "../../../../../types/types.ts";

function Selector({options, handler}: Options) {
    return (
        <div className={"selector"}>
            <select onChange={handler}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Selector;
