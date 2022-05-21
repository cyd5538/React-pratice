import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Image1 from "../assets/main1.png";
import Image2 from "../assets/main2.png";
import Image3 from "../assets/main3.png";
import Image4 from "../assets/main4.png";
import Image5 from "../assets/main5.png";
import styled from "styled-components";
import "swiper/css/pagination";

const MainStyle = styled.div`
top: 0;
left: 0;
z-index: -1;

.img{
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;
        object-fit: cover;
        vertical-align: middle;
        
    }

`;

const Main = () => {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <MainStyle>
      <Swiper
        slidesPerView={1}
        scrollbar={{ draggable: true }}

        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img className="img" src={Image1} alt="메인1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src={Image2} alt="메인2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src={Image3} alt="메인3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src={Image4} alt="메인4" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src={Image5} alt="메인5" />
        </SwiperSlide>
      </Swiper>
    </MainStyle>
  );
};


// 모바일 main은 사진은 다른거 쓰네.
export default Main;
