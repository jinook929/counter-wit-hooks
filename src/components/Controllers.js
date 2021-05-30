import React, { Component } from 'react'
import '../App.css'

export class Controllers extends Component {
  handleBtnClick = (e) => {
    this.props[e.target.name]()
  }
  render() {
    return (
      <div className="Controllers">
        <button id="minusBtn" onClick={this.handleBtnClick} name="handleMinusBtnClick">-</button>
        <button id="plusBtn" onClick={this.handleBtnClick} name="handlePlusBtnClick">+</button>
      </div>
    )
  }
}

export default Controllers
