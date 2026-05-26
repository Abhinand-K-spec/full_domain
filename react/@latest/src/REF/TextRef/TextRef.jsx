
import React, { useRef } from 'react'

const TextRef = () => {
    const textRef = useRef();
    const color = ['red','green','orange'];
    const changeColor = ()=>{
        const random = color[Math.floor(Math.random() *color.length)]
        textRef.current.style.color = random
    }
  return (
    <div>
      <h1 ref={textRef}>Hello world</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default TextRef
