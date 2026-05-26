import React from 'react'
import Child from './Child'

const Parent = () => {
  const message = 'hello from parent'
  return (
    <div>
      <Child msg={message}/>
    </div>
  )
}

export default Parent
