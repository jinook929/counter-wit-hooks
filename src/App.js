import React, { Component } from 'react'
import Counter from './components/Counter'
import Reset from './components/Reset'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  handleMinusBtnClick = () => {
    this.setState({count: this.state.count - 1})
  }

  handlePlusBtnClick = () => {
    this.setState({count: this.state.count + 1})
  }

  handleResteBtnClick = () => {
    this.setState({count: 0})
  }
  
  render() {
    return (
      <div>
        <Counter count={this.state.count} handleMinusBtnClick={this.handleMinusBtnClick} handlePlusBtnClick={this.handlePlusBtnClick} />
        <Reset handleResteBtnClick={this.handleResteBtnClick} />
      </div>
    )
  }
}

export default App
