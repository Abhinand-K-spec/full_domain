import React, { useCallback, useState } from 'react'


const Child = React.memo(({handle})=>{

        console.log('child');
    
    return(
        <>
            <button onClick={handle}>child</button>
        </>
    )
})


const Parent = () => {

    const [count,setCount] = useState(0);

    const handleClick = useCallback(()=>{
        console.log('child clicked');
        
    },[])
  return (
    <div>
      <Child handle={handleClick}/>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Parent
