import React, { useRef } from 'react'

const BGText = () => {
    const bgRef = useRef();
    let color = ['black','red','white','yellow']

    const change = ()=>{
        let random = color[Math.floor(Math.random()*color.length)];
        bgRef.current.style.backgroundColor = random;
    }
  return (
    <div>
        <div ref={bgRef}>
            <h1>hi</h1>
        </div>
      <button onClick={change}>change</button>
    </div>
  )
}

export default BGText
