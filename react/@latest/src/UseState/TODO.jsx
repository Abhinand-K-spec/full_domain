import React, { useState } from 'react'

const TODO = () => {
    const [inp,setInp] = useState('');
    const [list,setList] = useState([])


    const add = (inp)=>{
        if(inp.trim==="") return;
        setList([...list,inp]);
    }

    const remove = (i)=>{
        setList(list.filter((_,ind)=>i!==ind))
    }
  return (
    <>
      <ul>
      {list.map((item,ind)=>(
        <li>{item}
        <button onClick={()=>remove(ind)}>-</button>
        </li>
      ))}
      </ul>

<input type="text" value={inp} onChange={(e)=>{setInp(e.target.value)}} name="" id="" />
<button onClick={()=>(add(inp))}>Add</button>
    </>
  )
}

export default TODO
