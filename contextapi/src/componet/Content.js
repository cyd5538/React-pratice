import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Thename } from '../context/Thename';

const Content = () => {
  const {isDark} = useContext(ThemeContext);
  const user = useContext(Thename);
  
  return (
    <div style={{
        backgroundColor : isDark ? 'black' : 'white',
        color : isDark ? 'white' : 'black'
    }} className='content'> {user}의 Content</div>
  )
}

export default Content