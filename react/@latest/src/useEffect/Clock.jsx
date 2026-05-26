import React, { useEffect, useState } from 'react'

const Clock = () => {

    const [time,setTime] = useState({h:0,m:0,s:0})

    useEffect(()=>{
        let interval = setInterval(()=>{
            const date = new Date();
    
            setTime({
                h:date.getHours()>10?date.getHours()-12:date.getHours(),
                m:date.getMinutes(),
                s:date.getSeconds(),
                
            },1000)

            return(()=>{
                clearInterval(interval)
            })
        })
    },[])

  return (
    <div>
      <h1>{time.h.toString().padStart(2,'0')} : {time.m.toString().padStart(2,'0')} : {time.s.toString().padStart(2,'0')}</h1>
    </div>
  )
}

export default Clock
