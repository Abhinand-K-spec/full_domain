import React from 'react'

const Child = ({send}) => {
    const message = 'hi from child'
    const sendData =()=>{
        send(message);
    } 
  return (
    <div>
      <button onClick={sendData}>Send</button>
    </div>
  )
}

export default Child
