import React from 'react'
import Controllers from "./Controllers"

import {connect} from 'react-redux'

const Counter = (props) => {
  return (
    <div className="Counter">
      <h1>{props.count}</h1>
      <Controllers />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter)
