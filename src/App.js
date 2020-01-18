import React, { Component } from 'react';
import './App.css';
import FormComponent from './components/formcomponent';

class App extends Component {
  constructor() {
    super();
    this.state = {value: ''};
  } 

  handleChange(event) {
    this.setState({value: event.target.value})
  } 

  render(){
    return (
      <div>
        <form className="App">
          <label htmlFor="value">Value</label>
          <input id="name" type="text" value={this.state.value} onChange={(event) =>{this.handleChange(event)}}/>
        </form>
        <FormComponent 
          value = { this.state.value } 
        />
      </div>
    );
  } 
}

export default App;
