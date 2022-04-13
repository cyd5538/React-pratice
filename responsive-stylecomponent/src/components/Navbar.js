import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";
const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  @media (max-width: 768px){
    justify-content:center;
  }
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <div className="logo">Nav</div>
      </Link>
      <Burger />
    </Nav>
  );
};

export default Navbar;
