import React from 'react'

const ChildRef = ({dataRef}) => {

    const sendData = ()=>{
        dataRef.current = 'hello parent!!'
        alert('success')
    }
  return (
    <div>
      <button onClick={sendData}>Send</button>
    </div>
  )
}

export default ChildRef
