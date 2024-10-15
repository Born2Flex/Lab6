import './SearchBar.css';
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

function SearchBar() {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Search form submitted!");
    }

    const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        Cookies.remove('authenticated');
        navigate('/login');
    }

    return (
        <div className={"search-bar"}>
            <form onSubmit={handleSubmit}>
                <input placeholder={"Search"} required/>
            </form>
            <button className={"logout-btn"} onClick={handleLogout}>Log out</button>
        </div>
    );
}

export default SearchBar;
