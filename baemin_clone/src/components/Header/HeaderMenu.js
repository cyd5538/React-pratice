import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menu } from './menu'


const HeaderMenuStyle = styled.div`
  width: 60%;
  position: absolute;
  top: 20px;
  left: 250px;
  display: flex;

  ::-webkit-scrollbar {
    width: 2px;  /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
      height: 30%; /* 스크롤바의 길이 */
      background: #333; /* 스크롤바의 색상 */
      
      border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
      background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
  }

  li{
    margin-right: 20px;
  }

  @media screen and (max-width:1200px){
    top: 60px;
    left : 10px;
    white-space: nowrap;
    overflow: auto;
    width: 100%;
  }
  @media screen and (max-width:750px){
    top: 60px;
    left: 10px;
    white-space: nowrap;
    padding-bottom: 20px;
    overflow: auto;
    
  }
`
const HeaderMenu = () => {
  return (
    <HeaderMenuStyle>
      {menu.map((name) => (<Link key={name.link} to={name.link}><li>{name.name}</li></Link>))}
    </HeaderMenuStyle>
  )
}

export default HeaderMenu
