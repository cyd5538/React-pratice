import React from 'react'
import { BsSearch, BsCartX } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai";
const HeaderIconStyle = styled.div`
  display : flex;  
  width: 15%;
  justify-content: space-between;

  li{
    font-size: 1.5rem;
    cursor: pointer;
  }

  .btn{
    z-index: 15;
  }

  .Login{
    width: 80px;
    height: 30px;
    line-height: 25px;
    border: 3px solid #000;
    border-radius: 15px;
    text-align: center;
    font-size: 1rem;
  }

  .btn{
    transition: all ease-in 0.5s;
  }
  
  @media screen and (max-width:1200px){
    margin-right: 5%;
    width: 30%;
    font-size: 1rem;

  }
  @media screen and (max-width:767px){
   
    margin-right: 10%;
    .Login{
      display:none;
    }
  }
`

const HeaderIcon = ({setClick, click}) => {

  return (
    <HeaderIconStyle>
      <li><BsSearch /></li>
      <li><BsCartX /></li>
      <li className='Login'><Link to="/login">로그인</Link></li>
      <li className='btn' onClick={() => setClick(!click)}>{click ? <AiOutlineClose /> : <BiMenu/> }</li>
  
    </HeaderIconStyle>
  )
}

export default HeaderIcon
