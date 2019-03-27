import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Image from "./Image.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Single picture website</h2>
        </div>
        <p className="App-intro">
          <Image myImage={"https://ih0.redbubble.net/image.404521096.3695/flat,550x550,075,f.u1.jpg"}/>
        </p>
      </div>
    );
  }
}

export default App;
