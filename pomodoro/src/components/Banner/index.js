import React, { Component } from 'react';
import { cssClassName } from '../../config/wording';
import Button from '../Button';

export default class Banner extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.closeBanner();
    }, 10000);    
  }

  closeBanner() {
    if (this.refs.banner) {
      this.refs.banner.style.display = 'none';
    }
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
