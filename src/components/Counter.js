import React, { Component } from 'react'
import Controllers from "./Controllers"

export class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <Controllers handleMinusBtnClick={this.props.handleMinusBtnClick} handlePlusBtnClick={this.props.handlePlusBtnClick} />
      </div>
    )
  }
}

export default Counter
