import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor (){
    super()

    this.state = {
      movies: ["Macgruber", "Macgruber", "Macgruber", "Remember the Titans", "Pulp Fiction", "The Big Lebowski"]
    }
  }
  render() {
    let moviesList = this.state.movies.map((element, index) => {
        return <h2 key={index}>{element}</h2>
    })
    return <div className="App">{moviesList}</div>
  }
}

export default App;
