import "./NavBar.css";
import SearchBar from "./searchbar/SearchBar.tsx";
import MainNavigation from "./main-navigation/MainNavigation.tsx";

function NavBar() {
    return (
        <div className={"navbar"}>
            <MainNavigation/>
            <SearchBar/>
        </div>
    );
}

export default NavBar;
