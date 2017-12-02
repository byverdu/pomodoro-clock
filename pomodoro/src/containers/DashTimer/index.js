import React, { Component } from 'react';
import { cssClassName } from '../../config/wording';
import Timer from '../../components/Timer';
import Button from '../../components/Button';
import { connect } from 'react-redux';
import { actions } from '../../redux';

class DashTimer extends Component {

  inputsRenderer() {
    const labels = [
      { text: 'pomodoro' },
      { text: 'short' },
      { text: 'long' }
    ];

    const textBuilder = ( text ) => {
      const capitalised = text.replace(
        text.charAt(0),
        text.charAt(0).toUpperCase()
      );
      return text !== 'pomodoro' ?
        `${capitalised} break` : capitalised;
    }

    return labels.map(( label, key ) => {
      return(
        <label htmlFor={label.text} key={key}>
          <input
            type="radio"
            name="timerType"
            id={label.text}
            value={label.text}
          />
          <span>{ textBuilder( label.text )}</span>
        </label>
        
      );
    });
  }

  startTimer() {
    const activeRadio = Array
      .from(document.getElementsByName('timerType'))
      .filter( elem => elem.checked ).pop();

    if ( activeRadio ) {
      this.props.dispatch( actions.startTimer(activeRadio.value));
    }
  }

  render() {
    return(
      <div className={cssClassName( '__dashTimer' )}>
        { this.inputsRenderer() }
        <Button
          text="Start Timer"
          clickHandler={ this.startTimer.bind( this )}
          disabled={ this.props.timers.disabled }
        />
        <Timer />
        <h3>
          Pomodoro Counter: {this.props.timers.counter}
        </h3>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    timers: state.timers
  }
}

export default connect( mapStateToProps )( DashTimer );
