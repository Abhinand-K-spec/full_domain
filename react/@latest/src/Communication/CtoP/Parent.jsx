import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [msg, setMsg] = useState('');

    const recieveData = (message)=>{
        console.log('recieved message from child',msg)
        setMsg(message)
    }
  return (
    <div>
      <Child send={recieveData}/>
      <h1>{msg}</h1>
    </div>
  )
}

export default Parent
