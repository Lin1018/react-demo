import React, { Component } from 'react';
import './App.css';
import AddList from '../../components/AddList/AddList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      msg: 'This is App Component content',
      requiredMsg: 123,
      defaultMsg: '',
    }
  }

  sendProps() {
    this.setState({
      msg: 'msg被改变'
    })
  }
  
  render() {
    return (
      <div>
        <h3 onClick={this.sendProps.bind(this)}>{this.state.msg}</h3>
        <AddList 
          msg={this.state.msg} 
          requiredMsg={this.state.requiredMsg}
        >
        </AddList>
      </div>
    )
  }
}

export default App;