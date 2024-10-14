import "./Selector.css";

interface Option {
    value: string;
    text: string;
}

export interface Options {
    options: Option[];
}

function Selector({options}: Options) {
    return (
        <div className={"selector"}>
            <select>
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
