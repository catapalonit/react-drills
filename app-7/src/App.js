import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import NewTask from "./NewTask"

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  // handleInputChange(value) {
  //   this.setState({ input: value });
  // } moved to n]NewTask

  handleAddTask(task) {
    this.setState({
      list: [...this.state.list, task],
    });
  }

  render() {
    // let list = this.state.list.map((element, index) => {
    //   return <Todo key={index} task={element} />;
    // }); moved to list.js

    return (
      <div className="App">
        <h1>To Do List</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
        
      </div>
    );
  }
}

export default App;