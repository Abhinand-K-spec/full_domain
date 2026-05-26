import React, { useState } from 'react'


const useCount = ()=>{
    const [count, setCount] = useState(0)

    const inc = ()=>{setCount((p)=>p+1)};
    const dec = ()=>{setCount((p)=>p-1)};

    return {count, inc, dec}
}


const Counter = () => {

    let {count,inc,dec} = useCount();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default Counter
