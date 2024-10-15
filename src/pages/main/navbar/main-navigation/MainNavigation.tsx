import "./MainNavigation.css";
import Logo from "./logo/Logo.tsx";
import NavButton from "./navbutton/NavButton.tsx";
import Selector from "./selector/Selector.tsx";
import {useContext} from "react";
import { useTranslation } from 'react-i18next';
import {MainContext} from "../../MainPage.tsx";
import {Options} from "../../../../types/types.ts";

function MainNavigation() {
    const selectorOptions: Options = {
        options: [
            { value: "en", text: "English" },
            { value: "uk", text: "Ukrainian" },
            { value: "de", text: "German" }
        ],
        handler: langChangeHandler
    };
    const context = useContext(MainContext);
    const { i18n } = useTranslation();

    function langChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        if (!context) {
            console.log("Context is not accessible!")
        }
        const {setLanguage} = context;
        if (setLanguage) {
            console.log(event);
            console.log(event.target.value);
            setLanguage(event.target.value);
            i18n.changeLanguage(event.target.value);
        }
    }
    return (
        <div className={"main-navigation"}>
            <Logo/>
            <NavButton title={"Home"} handler={event => {
                event.preventDefault()
            }}/>
            <NavButton title={"Map"} handler={event => {
                event.preventDefault()
            }}/>
            <Selector {...selectorOptions}/>
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
