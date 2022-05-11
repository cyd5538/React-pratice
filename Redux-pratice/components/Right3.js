import React from 'react'
import { useDispatch } from 'react-redux'
function Right3() {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Left1</h1>
       <button onClick={() => { dispatch({type : "PLUS"})}}>PLUS</button>
       <button onClick={() => { dispatch({type : "MINUS"})}}>MINUS</button>
    </div>
  )
}

export default Right3;
