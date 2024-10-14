import "./NavButton.css";
import {MouseEventHandler} from "react";


interface ButtonData {
    title: string,
    handler: MouseEventHandler<HTMLButtonElement>,
}

function NavButton({title, handler}: ButtonData) {
    return (
        <div className={"nav-button"}>
            <button onClick={handler}>{title}</button>
        </div>
    );
}

export default NavButton;
