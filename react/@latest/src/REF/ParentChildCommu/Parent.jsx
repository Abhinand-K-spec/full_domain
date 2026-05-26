import React, { useRef } from 'react'
import Child from './Child'

const Parent = () => {

  const inputRef = useRef();

  const focusInp = ()=>{
    inputRef.current.focus();
  }
  
  return (
    <div>
      <Child ref={inputRef}/>
      <button onClick={focusInp}>focus</button>
    </div>
  )
}

export default Parent
