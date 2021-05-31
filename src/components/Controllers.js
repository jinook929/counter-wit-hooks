import React from 'react'
import '../App.css'

import {increaseCount, decreaseCount} from '../actions'
import {useSelector, useDispatch} from 'react-redux'

const Controllers = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <div className="Controllers">
      <button id="minusBtn" onClick={() => dispatch(decreaseCount(count))}>-</button>
      <button id="plusBtn" onClick={() => dispatch(increaseCount(count))}>+</button>
    </div>
  )
}

export default Controllers