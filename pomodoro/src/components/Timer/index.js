import React, { Component } from 'react';
import { cssClassName } from '../../config/wording';
import { runInterval } from '../../config/utils';

export default class Timer extends Component {

  componentDidMount() {
    runInterval(
      this.props.timer,
      this.refs.minutes,
      this.refs.seconds
    );
  }

  render() {
    return(
      <div
        className={cssClassName( '__timer' )}
        ref="banner"
      >
        <span
          ref="minutes"
          className={cssClassName( '__timer--minutes' )}
        >
          00
        </span>:
        <span
          ref="seconds"
          className={cssClassName( '__timer--seconds' )}
        >
          00
        </span>
      </div>
    );
  }
}