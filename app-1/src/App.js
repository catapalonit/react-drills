import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      words: ""
    }

this.handleChange = this.handleChange.bind(this)
}
handleChange(value){
  this.setState ( { words : value})
}


  render() {
    return (
      <div className = "App"> {/* this is because of the css file... has our class as "App" */}
        <input onChange = { (event) => this.handleChange(event.target.value) } />
        <p>{this.state.words}</p>
      </div>
    );
  }
}

export default App;
