import React, { useMemo, useState } from 'react'

const Memo = () => {

    const [count,setCount] = useState(0);
    const [theme,setTheme] = useState('light');


    const expense = (num)=>{
        console.log('calculating')
        return num*2
    }

    const res = useMemo(()=>{
        return expense(count)
    },[count])
  return (
    <div style={{
        background: theme==='dark'?'black':'white',
        color : theme==='dark'?'white':'black',
    }
    }>
      <h1>{res}</h1>
      <button onClick={()=>setCount(p=>p+1)}>inc</button>
      <button onClick={()=>setTheme(theme==='light'?'dark':'light')}>Toggle</button>
    </div>
  )
}

export default Memo
