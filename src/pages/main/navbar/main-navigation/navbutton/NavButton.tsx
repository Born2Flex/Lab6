import "./NavButton.css";
import {ButtonData} from "../../../../../types/types.ts";

function NavButton({title, handler}: ButtonData) {
    return (
        <div className={"nav-button"}>
            <button onClick={handler}>{title}</button>
        </div>
    );
}

export default NavButton;
