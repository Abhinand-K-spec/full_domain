import React, { forwardRef } from 'react'

const Child = forwardRef((props,ref) => {
  return (
    <div>
      <input type="text" ref={ref} name="" id="" />
    </div>
  )
})

export default Child
