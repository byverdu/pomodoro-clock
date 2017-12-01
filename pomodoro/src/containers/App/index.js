import React, { Component } from 'react';
import './App.css';
import { runInterval } from '../../config/utils';

import Task from '../../components/Task';
import ListTasks from '../../containers/ListTasks';

class App extends Component {
  runIntervalHandler() {
    runInterval(5, this.refs.minutes, this.refs.seconds);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <button onClick={() => {this.runIntervalHandler()}}>Timer</button>
          Timer
          <div ref="minutes"></div>
          <div ref="seconds"></div>
        </div>
        <ListTasks /> 
        {/* <Task count={0} text="xoxooxoxox"></Task> */}
      </div>
    );
  }
}

export default App;
