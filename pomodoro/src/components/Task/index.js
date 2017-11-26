import React, { Component } from 'react';
import { cssClassName } from '../../config/wording';
import './Task.css';

export default class Task extends Component {

  get count() {
    return `${this.props.count + 1}.`;
  }
  
  get idAttribute() {
    return `task-${this.props.count + 1}`;    
  }

  onChangeHandler( event ) {
    const parentClass = event.target.parentElement.classList;
    if ( event.target.checked ) {
      parentClass.add('task-done');
    } else {
      parentClass.remove('task-done');
    }
  }

  render() {
    return(
      <li className={cssClassName('__task')}>
        <label
          htmlFor={this.idAttribute}
          className={cssClassName('__task--label')}
        >
          <input
            onChange={this.onChangeHandler}
            type="checkbox"
            name="task"
            id={this.idAttribute}
            className={cssClassName('__task--check')}
          />
          {this.count} {this.props.text}
        </label>
      </li>
    );
  }
}