import React, { useState, useEffect } from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderIcon from "./HeaderIcon";
import styled from "styled-components";
import HeaderRight from "./HeaderRight";

const HeaderStyles = styled.div`
  .white{
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: transparent;
  }  
  .transparent{
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: white;
  }  
  @media screen and (max-width:1200px){
    .transparent{
      height: 100px;

      border-bottom: 1px solid #000;
    }
  }
  @media screen and (max-width:750px){
    .transparent{
      border-bottom: none;
    }
  }
`;

const HeaderStyle = styled.div`
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .home {
    font-size: 2rem;
    font-weight: bold;
  }
  @media screen and (max-width: 750px) {
    .home {
      font-size: 1.3rem;
    }
  }
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <HeaderStyles>
      <div
        className={scrollPosition < 100 ? "white" : "transparent"}
      >
        <HeaderStyle>
          <div className="container">
            <div className="home">배민칰문방구</div>
            <HeaderIcon click={click} setClick={setClick} />
          </div>
          <HeaderMenu />
          <HeaderRight click={click} setClick={setClick} />
        </HeaderStyle>
      </div>
    </HeaderStyles>
  );
};

export default Header;
