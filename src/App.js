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
  
  render() {
    return (
      <div>
        <Counter count={this.state.count} />
        <Reset />
      </div>
    )
  }
}

export default App
