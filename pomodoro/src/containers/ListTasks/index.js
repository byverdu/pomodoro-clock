import React, { Component } from 'react';
import Button from '../../components/Button';
import Task from '../../components/Task';
import { wording } from '../../config/wording';
import { connect } from 'react-redux';
import { actions } from '../../redux';

export class ListTasks extends Component {

  constructor( props ) {
    super( props );
    this.state = {
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
    const newTask = {
      text: this.refs.newTask.value,
      completed: false,
      count: this.props.tasks.length
    };

    this.props.dispatch(actions.addTask(newTask));
  }

  handleKeyUp() {
    this.setState({
      disableAddButton: (this.refs.newTask.value.length > 0)
    });
  }

  renderDefaultList() {
    return this.props.tasks.map((item, key) => {
      return(
        <Task
          key={key}
          text={item.text}
          count={key}
        />
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

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect( mapStateToProps )( ListTasks );
