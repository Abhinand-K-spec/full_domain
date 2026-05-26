import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

const Counter = () => {

    const {count,setCount} = useContext(CounterContext);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(p=>p+1)}>+</button>
      
    </div>
  )
}

export default Counter
