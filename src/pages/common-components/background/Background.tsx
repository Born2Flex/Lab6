import {ReactNode} from "react";
import "./Background.css";

interface BackgroundTypeAndChildren {
    children?: ReactNode | undefined,
    type?: string | undefined
}

function Background({ children, type } : BackgroundTypeAndChildren) {
    return (
        <div className={"background " + type}>
            { children }
        </div>
    );
}

export default Background;
