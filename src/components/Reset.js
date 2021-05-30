import React, { Component } from 'react'
import '../App.css'

export class Reset extends Component {
  render() {
    return (
      <div className="Reset">
        <button id="resetBtn" onClick={() => this.props.handleResteBtnClick()} >Reset</button>
      </div>
    )
  }
}

export default Reset
