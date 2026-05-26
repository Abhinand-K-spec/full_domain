import React, { useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
        case 'inc':
            return state+1;
        case 'dec':
            return state-1;
        default :
            return state
    }
}
const Counter = () => {

    const [state,dispatch] = useReducer(reducer,0);

  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>{dispatch({type:'inc'})}}>+</button>
        <button onClick={()=>{dispatch({type:'dec'})}}>-</button>
    </div>
  )
}

export default Counter
