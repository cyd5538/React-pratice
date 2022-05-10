/* global kakao */
import React, { useEffect, useState } from "react";

const { kakao } = window;

const Maptest = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = { center: new kakao.maps.LatLng(37.5787708,126.9948698) };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  },[]);

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "inline-block",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        <div id="map" style={{ width: "99%", height: "100vh" }}></div>{" "}
      </div>
    </div>
  );
};

export default Maptest;
