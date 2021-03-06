import React, { Component } from 'react';
import { cssClassName } from '../../config/wording';

export default class Button extends Component {
  render() {
    return(
      <button
        onClick={this.props.clickHandler}
        className={cssClassName('__button')}
        disabled={this.props.disabled}
      >
      {this.props.text}
      </button>
    );
  }
}