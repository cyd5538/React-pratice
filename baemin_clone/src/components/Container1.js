import React from "react";
import { Container1Asset } from "../assets/container1/Container1Asset";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/navigation';

const Container1Style = styled.div`
  margin-top: 60px;
  text-align: center;
  margin: 60px auto;
  width:70%;
  .swiper-button-prev,
  .swiper-button-next{
    color: #333;
  }



  .text{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content:last baseline;
    div{
      font-size: 1.2rem;
      margin-top: 5px;
      font-family: 'BMJUA';
    }
    div:first-child{
      color: blue;
    }
  }

  img{
    width: 312px;
  }
  .imgswap img:last-child{
    display:none;
  }
  .imgswap:hover img:first-child{
    display:none;
  }

  .imgswap:hover img:last-child{
    display:inline-block;
  }


  @media screen and (max-width:1000px){
    img{
      width: 250px;
    }
  }

  @media screen and (max-width:666px){
    img{
      width: 140px;
    }
    .text div{
      font-size: 0.7rem;
    }
    .swiper-button-prev,
    .swiper-button-next{
        display:none;
    }

  }
`;

const Container1 = () => {

  SwiperCore.use([Navigation, Pagination]);

  return (
    <Container1Style>
      <Swiper
        className="swiper"
        slidesPerView={3}
        navigation
        scrollbar={{ draggable: true }}
      >
        {Container1Asset.map((img) => (
          <SwiperSlide
            className="SwiperSlide"
          >
        <div class="imgswap" >
          <img alt={img.text} src={img.img} />
          <img alt={img.text} src={img.hoverImg} /> 
        </div>
        <div className="text">
            <div>{img.best}</div>
            <div>{img.text}</div>
            <div>{img.price}</div>
        </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container1Style>
  );
};

export default Container1;
