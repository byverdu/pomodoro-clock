import React, { Component, Fragment } from 'react';
import { cssClassName } from '../../config/wording';
import Button from '../Button';

export default class Banner extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.closeBanner();
    }, 10000);
  }

  closeBanner() {
    this.refs.banner.remove();
  }

  render() {
    return(
      <div
        className={cssClassName( '__banner' )}
        ref="banner"
      >
        { this.props.text }
        <Button
          text="Close"
          clickHandler={this.closeBanner.bind( this )}
        />
      </div>
    );
  }
}