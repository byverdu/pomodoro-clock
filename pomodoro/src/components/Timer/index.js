import React, { Component } from 'react';
import { cssClassName } from '../../config/wording';

export default class Timer extends Component {

  runInterval(
    time, minutesRef, secondsRef
  ) {
    let minutesToMiliSeconds = (time * 60000) / 1000;
    
    function addZeroSmallerTen(timer) {
      return timer < 10 ? `0${timer}` : timer;
    }
   
    const interval = setInterval(function() {
      minutesToMiliSeconds --;
      if (minutesToMiliSeconds <= 0) {
        clearInterval(interval);
      }
      let newSecondsTimer = Math.floor((minutesToMiliSeconds % 60));
      let newMinutesTimer = Math.floor((minutesToMiliSeconds / 60));
      minutesRef.textContent = addZeroSmallerTen(newMinutesTimer);
      secondsRef.textContent = addZeroSmallerTen(newSecondsTimer);
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    if(nextProps.timeStarted) {
      this.runInterval(
        nextProps.timer,
        this.refs.minutes,
        this.refs.seconds
      );
    }
    return nextProps.timeStarted;
  }

  render() {
    return(
      <div
        className={cssClassName( '__timer' )}
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