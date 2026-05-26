import React, { useMemo, useState } from 'react'

const Button = () => {

    const[count,setCount] = useState(0);



    const increment = useMemo(()=>{
        
    if(count<5){
        
    }
       
    },[count])

  return (
    <div>
        <h2>{count}</h2>
      <button style={d} onClick={increment}>INC</button>
    </div>
  )
}

export default Button
