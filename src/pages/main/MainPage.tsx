import Background from "../common-components/background/Background.tsx";
import NavBar from "./navbar/NavBar.tsx";

function MainPage() {
    return (
        <Background type={"dashboard"}>
            <NavBar/>
        </Background>
    );
}

export default MainPage;
