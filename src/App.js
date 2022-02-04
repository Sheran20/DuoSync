// import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Controller from './Components/Controller';

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="game-title" style={{textAlign: 'center'}}>DuoSync</h1>
        <Controller/>
      </div>
    )
  }
}

export default App;
