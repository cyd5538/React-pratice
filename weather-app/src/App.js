import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [Icon, setIcon] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=29975ab2f4a94fa0957a44c383fe3b08&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
        setIcon(response.data.weather[0].icon);
      });
      setLocation("");
    }
  };

  let iconurl = "http://openweathermap.org/img/w/" + Icon + ".png";

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          type="text"
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°</h1> : null}
          </div>
          <div className="icon">
            {data.weather ? (
              <img style={{ width: "200px" }} src={iconurl} alt="icon"></img>
            ) : null}
          </div>
          <div className="description">
            {data.weather ? (
              <p style={{ fontSize: "3rem" }}>{data.weather[0].main}°</p>
            ) : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>최고기온</p>
            {data.main ? <p>{data.main.temp_max}</p> : null}
          </div>
          <div className="humidity">
            <p>습도</p>
            {data.main ? <p>{data.main.humidity}</p> : null}
          </div>
          <div className="wind">
            <p>바람</p>
            {data.wind ? <p>{data.wind.speed}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
