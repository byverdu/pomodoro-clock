import React, { Component } from 'react';
import { cssClassName } from '../../config/wording';

export default class Header extends Component {
  render() {
    return(
      <header className={cssClassName('__header')}>
        <h1 className={cssClassName('__header--title')}>
          {this.props.title}
        </h1>
      </header>
    );
  }
}