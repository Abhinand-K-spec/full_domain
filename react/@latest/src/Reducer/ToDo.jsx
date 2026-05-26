import React, { useReducer, useState } from 'react'


function reducer(state,action){
    switch(action.type){
        case 'add':
            return[...state,{id:Date.now(),text:action.payload}]
        case 'rem':
            return state.filter((item)=>item.id!==action.payload)
        default:
            return state;
    }
}

const ToDo = () => {
    const [inp,setInp] = useState('');

    const [state, dispatch] = useReducer(reducer,[])
  return (
    <div>
      <ul>
        {state.map((item)=>(
            <li key={item.id}>{item.text}
            <button onClick={()=>{dispatch({type:'rem',payload:item.id})}}>-</button>
            </li>
        ))}
      </ul>
        <input type="text" value={inp} onChange={(e)=>setInp(e.target.value)}  name="" id="" />
        <button onClick={()=>{dispatch({type:'add',payload:inp}),setInp('')}}>add</button>
    </div>
  )
}

export default ToDo
