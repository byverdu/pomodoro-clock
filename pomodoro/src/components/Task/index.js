import React, { Component } from 'react';
import { cssClassName } from '../../config/wording';
import './Task.css';
import Button from '../Button/';

export default class Task extends Component {

  get count() {
    return `${this.props.count + 1}.`;
  }
  
  get idAttribute() {
    return `task${this.props.count + 1}`;    
  }

  onChangeHandler( event ) {
    const liRef = event.target.id;
    const parentClass = this.refs[liRef].classList;
    if ( event.target.checked ) {
      parentClass.add('task-done');
    } else {
      parentClass.remove('task-done');
    }
  }

  deleteTask( id ) {
    this.refs[id].remove();
  }

  render() {
    return(
      <li className={cssClassName('__task')} ref={this.idAttribute}>
        <label
          htmlFor={this.idAttribute}
          className={cssClassName('__task--label')}
        >
          <input
            onChange={this.onChangeHandler.bind(this)}
            type="checkbox"
            name="task"
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
