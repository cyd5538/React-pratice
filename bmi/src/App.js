import React, { useState, useRef,} from "react";
import "./App.css";
import Chart from "chart.js/auto";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setmessage] = useState("");
  const canvasDom = useRef(null);

  let calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("키와 몸무게를 입력해주세요");
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setBmi(bmi.toFixed(1));
      const ctx = canvasDom.current.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["bmi"],
          datasets: [
            {
              data: [bmi.toFixed(1), 40],
              borderWidth: 0.1,
              barPercentage: 0.1,
            },
          ],
        },
        options: {
          indexAxis: "y",
          backgroundColor: "rgba(0,0,255,1)",
          hoverBackgroundColor: ["rgba(255,255,0,0.6)"],
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      if (bmi < 18.5) {
        setmessage("많이드세요");
      } else if (bmi >= 18.5 && bmi < 23) {
        setmessage("딱 좋아요");
      } else {
        setmessage("적당히드세요");
      }
    }
  };

  let reload = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  let imgSrc;

  if (bmi === "") {
    imgSrc = null;
  } else {
    if (bmi < 18.5) {
      imgSrc = require("./asset/haessi.jfif");
    } else if (bmi >= 18.5 && bmi < 23) {
      imgSrc = require("./asset/legend.jpg");
    } else {
      imgSrc = require("./asset/pika.png");
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h2 className="center">Bmi 계산기</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>몸무게</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>키</label>
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your Bmi is : {bmi}</h3>
          <p>{message}</p>
          <canvas ref={canvasDom} height="100"></canvas>
        </div>
        <div className="img-cont">
          <img src={imgSrc} alt="" width="200px"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
