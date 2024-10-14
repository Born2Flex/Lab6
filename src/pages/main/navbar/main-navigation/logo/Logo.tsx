import "./Logo.css";

function Logo() {
    return (
      <div className={"logo"}>
          <img src={"/src/assets/weather-icons/sunny.png"} alt={"logo"}/>
          <h1>MetaWeather</h1>
      </div>
    );
}

export default Logo;
