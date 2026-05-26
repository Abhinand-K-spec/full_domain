import React, { useEffect, useState } from 'react'

// const Timer = () => {

//     const [time,setTime] = useState(0);
//     const [run,setRun] = useState(false);

//     useEffect(()=>{
//         if(!run) return;
//         const interval = setInterval(()=>{
//             setTime(p=>p+1);
//         },1000);

//         return(()=>{
//             clearInterval(interval);
//         })
//     },[run])

    
//   return (
//     <div>
//       <h1>{time}</h1>
//       <button onClick={()=>setRun(true)}>Start</button>
//       <button onClick={()=>setRun(false)}>Stop</button>
//     </div>
//   )
// }

// export default Timer









const Child = ({handle})=>{

    const handleSub = ()=>{
        const msg = 'hi from child';
        handle(msg)
    }

    return(
        <>
        <button onClick={handleSub}>Pass to parent</button>
        </>
    )
}




const Parent = ()=>{

    const recieveData = (message)=>{
        console.log('message recieved',message);
    }
    return(<>
        <Child handle={recieveData}/>
    </>)
}

export default Parent
