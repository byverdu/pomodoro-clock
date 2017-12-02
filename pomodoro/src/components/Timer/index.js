import React, { Component } from 'react';
import { cssClassName } from '../../config/wording';
import { connect } from 'react-redux';
import { actions } from '../../redux';

class Timer extends Component {

  constructor( props ) {
    super( props );
  }

  getTimerToRun( name ) {
    const timers = {
      pomodoro: 0.2,
      long: 0.3,
      short: 0.1
    }

    return timers[ name ]; 
  }

  runInterval(
    time, minutesRef, secondsRef
  ) {
    let minutesToMiliSeconds = (time * 60000) / 1000;
    
    function addZeroSmallerTen(timer) {
      return timer < 10 ? `0${timer}` : timer;
    }
   
    const interval = setInterval(() => {
      minutesToMiliSeconds --;
      if (minutesToMiliSeconds <= 0) {
        clearInterval(interval);
        this.props.dispatch( actions.endTimer());
      }
      let newSecondsTimer = Math.floor((minutesToMiliSeconds % 60));
      let newMinutesTimer = Math.floor((minutesToMiliSeconds / 60));
      minutesRef.textContent = addZeroSmallerTen(newMinutesTimer);
      secondsRef.textContent = addZeroSmallerTen(newSecondsTimer);
    }, 1000);
  }

  shouldComponentUpdate( nextProps, nextState) {
    if ( nextProps.timers.timerType !== '' && nextProps.timers.disabled ) {
      this.runInterval(
        this.getTimerToRun(nextProps.timers.timerType),
        this.refs.minutes,
        this.refs.seconds
      );
    }
    return nextProps.timers.timerType !== '';
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

const mapStateToProps = state => {
  return {
    timers: state.timers
  }
}

export default connect( mapStateToProps )( Timer );
