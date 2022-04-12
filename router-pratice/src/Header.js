import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <h1>Router 연습</h1>
        <ul>
            <Link to="/Home"><li>Home</li></Link>
            <Link to="/About"><li>About</li></Link>
            <Link to="/Contact"><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Header