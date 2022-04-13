import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    cursor:pointer;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: skyblue;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/Home"><li>Home</li></Link>
      <Link to="/About"><li>About Us</li></Link>
      <Link to="/Contact"><li>Contact Us</li></Link>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  )
}

export default RightNav