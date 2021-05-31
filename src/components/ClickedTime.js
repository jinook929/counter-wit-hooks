import React, {useEffect} from 'react'
import '../App.css'

import {connect} from 'react-redux'

const ClickedTime = (props) => {
  const lastChange = new Date().toLocaleString()
  useEffect(() => {    
    const randomHex = '#'+ Math.floor(Math.random()*16777215).toString(16)
    document.querySelector(".ClickedTime").style.color = randomHex
  }, [props.count])
  return (
    <div className="ClickedTime">
      <h3>Counter Last Changed @ {lastChange}</h3>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(ClickedTime)
