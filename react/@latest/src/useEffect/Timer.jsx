import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [run,setRun] = useState(false);
    const [time,setTime] = useState({second:0,minute:0,hour:0});


    useEffect(()=>{
        if(!run) return;
        let interval = setInterval(()=>{
            setTime((prev)=>{
                let {second,minute,hour} = prev
                second++;

                if(second===60){
                    second = 0;
                    minute++
                }

                if(minute===60){
                    minute = 0;
                    hour++;
                }
                return {second,minute,hour};
            });
        },1000)

        return(()=>{
            clearInterval(interval)
        })
    },[run])

  return (
    <div>
      <h1>{time.second.toString().padStart(2,'0')} : {time.minute.toString().padStart(2,'0')}: {time.hour.toString().padStart(2,'0')} </h1>
      <button onClick={()=>setRun(true)}>Start</button>
      <button onClick={()=>{setTime({second:0,minute:0,hour:0}),setRun(false)}}>Reset</button>
      <button onClick={()=>setRun(false)}>Stop</button>
    </div>
  )
}

export default Timer
