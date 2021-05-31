import React from 'react'
import '../App.css'

import {resetCount} from '../actions'
import {useDispatch} from 'react-redux'

const Reset = () => {
  const dispatch = useDispatch()
  return (
    <div className="Reset">
      <button id="resetBtn" onClick={() => dispatch(resetCount())}>Reset</button>
    </div>
  )
}

export default Reset