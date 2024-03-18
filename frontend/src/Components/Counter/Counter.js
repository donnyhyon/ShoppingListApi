import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, resetCount } from '../../counterSlice'
import NavBar from '../NavBar/NavBar'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <NavBar />
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Reset value"
          onClick={() => dispatch(resetCount())}
        >
          Reset
        </button>
      </div>
    </>
  )
}