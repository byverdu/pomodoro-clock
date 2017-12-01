import React, { Component } from 'react';
import { cssClassName } from '../../config/wording';
import Timer from '../../components/Timer';
import Button from '../../components/Button';

export default class DashTimer extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      timer: 0,
      timeStarted: false
    }
    this.startTimer = this.startTimer.bind( this );
  }

  inputsRenderer() {
    const labels = [
      { text: 'pomodoro', value: 1 },
      { text: 'short', value: 1 },
      { text: 'long', value: 1 }
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
            value={label.value}
          />
          <span>{ textBuilder( label.text )}</span>
        </label>
        
      );
    });
  }

  startTimer() {
    const activeRadio = Array.from(document.getElementsByName('timerType')).filter( elem => elem.checked ).pop();

    if ( activeRadio ) {
      this.setState({
        timer: Number(activeRadio.value),
        timeStarted: true
      });
    }
  }

  render() {
    return(
      <div className={cssClassName( '__dashTimer' )}>
        { this.inputsRenderer() }
        <Button
          text="Start Timer"
          clickHandler={this.startTimer}
        />
        <Timer 
          timer={this.state.timer}
          timeStarted={this.state.timeStarted}/>
        
      </div>
    );
  }
}