import React, { Component } from 'react';
import './App.css';

import Task from '../components/Task';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Task count={0} text="xoxooxoxox"></Task>
      </div>
    );
  }
}

export default App;
