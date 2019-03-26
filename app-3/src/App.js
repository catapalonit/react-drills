import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor (){
    super()

    this.state = {
      filteredMovies: "",
      movies: ["Macgruber", "Macgruber", "Macgruber", "Remember the Titans", "Pulp Fiction", "The Big Lebowski"]
    }
  }

    handleChange(filter) {
      this.setState({ filteredMovies: filter })
    }
  
  render() {
    let moviesList = this.state.movies.filter((element, index) => {
        
        return element.toLowerCase().includes(this.state.filteredMovies.toLowerCase())
    })
    
    .map((element, index) => {
      return<h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">
      <h1>Greatest Movies Of All Time</h1>
      <input onChange= { (event) => this.handleChange(event.target.value)} type="text"/>
      {moviesList}
      </div>
    )
  }
}

export default App;
