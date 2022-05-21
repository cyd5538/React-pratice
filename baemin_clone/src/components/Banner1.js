import React from 'react';
import Banner from '../assets/Banner1.jpg';
import styled from 'styled-components';

const BannerStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    img{
      width:90%;
    }

`

const Banner1 = () => {
  return (
    <BannerStyle>
      <img alt="" src={Banner} />
    </BannerStyle>
  )
}

export default Banner1
