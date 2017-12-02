import React, { Component } from 'react';
import { cssClassName } from '../../config/wording';
import Timer from '../../components/Timer';
import Button from '../../components/Button';
import Banner from '../../components/Banner';
import { connect } from 'react-redux';
import { actions } from '../../redux';

class DashTimer extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      renderBanner: false
    }
  }

  get disabled() {
    return this.props.timers.disabled;
  }

  get counter() {
    return this.props.timers.counter;
  }

  isPomodoroTimer() {
    const timerType = this.props.timers.timerType
    return timerType === 'pomodoro' || timerType === '';
  }

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

  bannerRenderer( counter ) {
    const bannerText = counter === 0 ?
      'Time for a long break' :
      'Time for a short break';
    
      if (!this.disabled && this.state.renderBanner && this.isPomodoroTimer()) {
        return(
          <Banner text={bannerText} />
        );
      } else {
        return null;
      }
  }

  startTimer() {
    const activeRadio = Array
      .from(document.getElementsByName('timerType'))
      .filter( elem => elem.checked ).pop();

    if ( activeRadio ) {
      this.props.dispatch(
        actions.startTimer(activeRadio.value)
      );
      this.setState({renderBanner: true})
    }
  }

  render() {
    return(
      <div className={cssClassName( '__dashTimer' )}>
        {this.bannerRenderer(this.counter)}
        { this.inputsRenderer() }
        <Button
          text="Start Timer"
          clickHandler={ this.startTimer.bind( this )}
          disabled={ this.disabled }
        />
        <Timer />
        <h3>
          Pomodoro Counter: {this.counter}
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
