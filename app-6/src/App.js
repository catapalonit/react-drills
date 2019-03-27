import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Todo from "./Todo"

class App extends Component {
  constructor (){
    super();
  
    this.state = {
      toDo: [],
      input: ""
    }
    this.handleClick=this.handleClick.bind(this)
  }

    handleClick(){
      this.setState({toDo: [...this.state.toDo, this.state.userInput]})
    }

  render() {
    return (
      <div className="App">
      <h2>To Do List</h2>
      <input onChange= { (event) => this.setState({userInput: event.target.value})} />
      <button onClick= {() => this.handleClick()}>Do it</button>
          <Todo toDo={this.state.toDo} />
      </div>
    );
  }
}

export default App;
