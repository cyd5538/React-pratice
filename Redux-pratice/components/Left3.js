import React from 'react'
import {useSelector} from 'react-redux';
function Left3() { 
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3</h1>
      <h1>Left3 : {number}</h1>
    </div>
  )
}

export default Left3;
