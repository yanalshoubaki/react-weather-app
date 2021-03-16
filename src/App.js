import React, { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const [haveData, setHaveData] = useState(false);
  const getWeatherIcon = (icon) => {
    const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg`;
    return iconUrl;
  };
  const getWeather = () => {
    var api = `API_KEY_HERE`;
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`,
    }).then((res) => {
      const { main, name, sys, weather } = res.data;
      const iconData = { ...weather };
      const icon = getWeatherIcon(iconData[0].icon);
      setWeather({ main, name, sys, weather, icon });
      setHaveData(true);
      setCity("");
    });
  };

  return (
    <div classNameName="App">
      <section className="top-banner">
        <div className="container">
          <h1 className="heading">Simple Weather App</h1>
          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            id="city"
            placeholder="Search for a city"
            value={city}
          />
          <button onClick={getWeather}>SUBMIT</button>
          <span className="msg"></span>
        </div>
      </section>
      <section className="ajax-section">
        <div className="container">
          <ul className="cities">
            {haveData && (
              <li className="city" data-city={weather.name}>
                <h2 className="city-name">
                  <span>{weather.name}</span>
                  <sup>{weather.sys.country}</sup>
                </h2>
                <div weather="city-temp">
                  {Math.round(weather.main.temp)}
                  <sup>°C</sup>
                </div>
                <figure>
                  <img
                    weather="city-icon"
                    src={weather.icon}
                    alt={weather.name}
                  />
                  <figcaption>{weather.description}</figcaption>
                </figure>
              </li>
            )}
          </ul>
        </div>
      </section>
      <p class="container text-center col-8">
        جميع البيانات تم الحصول عليها من :{" "}
        <a href="https://openweathermap.org/">Open Weather</a>
        <br />
        <a
          class="github-button"
          href="https://github.com/yanalshoubaki/covid-19/fork"
          data-color-scheme="no-preference: dark; light: dark; dark: light;"
          data-icon="octicon-repo-forked"
          data-size="large"
          data-show-count="true"
          aria-label="Fork yanalshoubaki/covid-19 on GitHub"
        >
          Fork
        </a>
      </p>
      <footer>
        <div class="container">
          <div class="social_media">
            <ul>
              <li>
                <a href="https://www.facebook.com/yanalshoubakidev/">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Yanal_sh9">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/yanalshoubaki">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/yanalshoubaki">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="copyright">
            تطوير{" "}
            <a href="https://www.facebook.com/yanalshoubakidev/">
              ينال الشوبكي
            </a>{" "}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
