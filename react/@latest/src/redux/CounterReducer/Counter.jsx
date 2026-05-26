import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice';

const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={dispatch(increment)}>+</button>
      <button onClick={dispatch(decrement)}>-</button>
    </div>
  )
}

export default Counter
