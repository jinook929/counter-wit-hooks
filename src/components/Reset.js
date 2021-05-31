import React from 'react'
import '../App.css'

import {connect} from 'react-redux'
import {resetCount} from '../actions'

const Reset = (props) => {
  return (
    <div className="Reset">
      <button id="resetBtn" onClick={props.resetCount}>Reset</button>
    </div>
  )
}

export default connect(null, {resetCount})(Reset)
