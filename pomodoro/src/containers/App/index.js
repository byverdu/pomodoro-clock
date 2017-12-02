import React, { Component } from 'react';
import './App.css';

import Task from '../../components/Task';
import ListTasks from '../../containers/ListTasks';
import Banner from '../../components/Banner';
import DashTimer from '../../containers/DashTimer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <DashTimer />
        </div>
        <ListTasks /> 
        <Banner text="holly molly"></Banner>
      </div>
    );
  }
}

export default App;
