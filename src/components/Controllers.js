import React from 'react'
import '../App.css'

import {connect} from 'react-redux'
import {increaseCount, decreaseCount} from '../actions'

const Controllers = (props) => {
  const handleBtnClick = (e) => {
    props[e.target.name](props.count)
  }
  return (
    <div className="Controllers">
      <button id="minusBtn" onClick={handleBtnClick} name="decreaseCount">-</button>
      <button id="plusBtn" onClick={handleBtnClick} name="increaseCount">+</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    decreaseCount: count => dispatch(decreaseCount(count)),
    increaseCount: count => dispatch(increaseCount(count)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controllers)
