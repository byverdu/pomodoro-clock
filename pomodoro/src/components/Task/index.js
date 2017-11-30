import React, { Component } from 'react';
import { cssClassName } from '../../config/wording';
import './Task.css';
import Button from '../Button/';
import { connect } from 'react-redux';
import { actions } from '../../redux';

export class Task extends Component {

  get count() {
    return `${this.props.id + 1}.`;
  }
  
  get idAttribute() {
    return `task${this.props.id + 1}`;    
  }

  getTaskPosition( idAttribute ) {
    const position = idAttribute.split('').pop();
    return ( position - 1 );
  }

  onChangeHandler( event ) {
    const eventTarget = event.target;
    const liRef = eventTarget.id;

    this.props.dispatch(
      actions.completedTask(
        this.getTaskPosition(liRef),
        eventTarget.checked
      )
    );
  }

  itemCompleted( completed ) {
    return completed ?
      'task-done' :
      '';
  }

  deleteTask( id ) {
    this.props.dispatch(
      actions.deleteTask(
        this.getTaskPosition( id )
      )
    );
  }

  render() {
    return(
      <li className={cssClassName('__task ') + this.itemCompleted(this.props.completed)} ref={this.idAttribute}>
        <label
          htmlFor={this.idAttribute}
          className={cssClassName('__task--label')}
        >
          <input
            onChange={this.onChangeHandler.bind(this)}
            type="checkbox"
            name="task"
            checked={this.props.completed}
            id={this.idAttribute}
            className={cssClassName('__task--check')}
          />
          {this.count} {this.props.text}
        </label>
        <Button
          text="Delete Task"
          clickHandler={() => {this.deleteTask(this.idAttribute)}}
        />
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect( mapStateToProps )( Task );
