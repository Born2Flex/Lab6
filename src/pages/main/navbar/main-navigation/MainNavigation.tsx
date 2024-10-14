import "./MainNavigation.css";
import Logo from "./logo/Logo.tsx";
import NavButton from "./navbutton/NavButton.tsx";
import Selector, {Options} from "./selector/Selector.tsx";

const selectorOptions: Options = {
    options: [
        { value: "ukr", text: "Ukrainian" },
        { value: "eng", text: "English" },
        { value: "ger", text: "German" }
    ]
};


function MainNavigation() {

    return (
        <div className={"main-navigation"}>
            <Logo/>
            <NavButton title={"Home"} handler={event => {
                event.preventDefault()
            }}/>
            <NavButton title={"Map"} handler={event => {
                event.preventDefault()
            }}/>
            <Selector options={selectorOptions.options}/>
            <NavButton title={"API"} handler={event => {
                event.preventDefault()
            }}/>
            <NavButton title={"About"} handler={event => {
                event.preventDefault()
            }}/>
        </div>
    );
}

export default MainNavigation;
