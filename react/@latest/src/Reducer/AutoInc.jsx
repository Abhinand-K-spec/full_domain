import React, { useEffect, useReducer } from 'react'


function reducer(state,action){
    switch(action.type){
        case 'tick':
            return {...state,count:state.count+1};
        case 'start':
            return {...state,run:true}
        case 'reset':
            return {...state,count:0};
        case 'stop':
            return {...state,run:false};
        default:
            return state
    }
}
const AutoInc = () => {

    const [state,dispatch] = useReducer(reducer,{count:0,run:true});

    useEffect(()=>{
        if(!state.run )return;
        const time = setInterval(()=>{
            dispatch({type:'tick'})
        },100)

        return(()=>{
            clearInterval(time)
        })
    },[state.run])
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{dispatch({type:'start'})}}>Start</button>
      <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
      <button onClick={()=>{dispatch({type:'stop'})}}>Stop</button>
    </div>
  )
}

export default AutoInc
