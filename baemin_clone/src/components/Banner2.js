import React from 'react';
import Banner from '../assets/banner2.jpg';
import styled from 'styled-components';

const Banner2Style = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 130px;
    img{
      width:90%;
    }

`

const Banner2 = () => {
  return (
    <Banner2Style>
      <img alt="" src={Banner} />
    </Banner2Style>
  )
}

export default Banner2;
