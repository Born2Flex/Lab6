import './SearchBar.css';

function SearchBar() {
    return (
        <div className={"search-bar"}>
            <form onSubmit={handleSubmit}>
                <input placeholder={"Search"} required/>
            </form>
        </div>
    );
}

export default SearchBar;

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search form submitted!");
}

