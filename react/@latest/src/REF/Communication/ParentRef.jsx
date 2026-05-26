import React, { useRef } from 'react'
import ChildRef from './ChildRef';

const ParentRef = () => {

    let dataRef = useRef();


    const showData = ()=>{
        alert('from child:'+dataRef.current);
    }
    
  return (
    <div>
      <ChildRef dataRef={dataRef}/>
      <button onClick={showData}>show</button>
    </div>
  )
}

export default ParentRef
