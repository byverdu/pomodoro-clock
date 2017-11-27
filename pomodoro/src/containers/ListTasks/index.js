import React, { Component } from 'react';
import Button from '../../components/Button';
import Task from '../../components/Task';
import { wording } from '../../config/wording';

export default class ListTasks extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      defaultList: [],
      disableAddButton: false
    }
    this.addTaskHandler = this.addTaskHandler.bind(this);
    // // this.deleteDoneTasksHandler = this.deleteDoneTasksHandler.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  clearInputfield() {
    this.refs.newTask.value = '';
    this.setState({
      disableAddButton: false
    });
  }

  addTaskHandler() {
    const oldState = this.state.defaultList;
    const newState = oldState.concat([
      { text: this.refs.newTask.value }
    ]);
    this.setState({
      defaultList: newState
    }, this.clearInputfield)
  }

  handleKeyUp() {
    this.setState({
      disableAddButton: (this.refs.newTask.value.length > 0)
    });
  }

  renderDefaultList() {
    return this.state.defaultList.map((item, key) => {
      return(
        <Task key={key} text={item.text} count={key}></Task>
      );
    });
  }

  render() {
    return(
      <div>
        <input
          ref="newTask"
          placeholder="New task to add..."
          type="text"
          onKeyUp={this.handleKeyUp}
        />
        <Button
          text={wording.buttons.addTask}
          clickHandler={this.addTaskHandler}
          disabled={!this.state.disableAddButton}
        />
        <Button
          text={wording.buttons.deleteDoneTasks}
          clickHandler={this.deleteDoneTasksHandler}
        />

        <ul ref="taskContainer">
          <li>
            {wording.defaultTask}
          </li>
          {this.renderDefaultList()}
        </ul>
      </div>
    );
  }
}