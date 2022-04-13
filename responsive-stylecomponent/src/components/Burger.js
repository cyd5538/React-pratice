import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyleBurget = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  display: none;    
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  ion-icon {
    font-size: 2em;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <StyleBurget>
        <div className="menubtn" onClick={onClick}>
          {open === true ? (
            <ion-icon name="close-outline"></ion-icon>
          ) : (
            <ion-icon name="menu-outline" open={open}></ion-icon>
          )}
        </div>
      </StyleBurget>
      <RightNav open={open}/>
    </>
  );
};

export default Burger;
