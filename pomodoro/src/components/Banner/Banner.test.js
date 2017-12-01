/* global describe, beforeEach */
import Banner from './index';
import Button from '../Button';
import {
  mount, React, expect, assertOutput, cssClassName
} from '../../config/setupTests';
import { wording } from '../../config/wording';

let wrapper;

beforeEach(() => {
  wrapper = mount( <Banner text={wording.title}/> );
});

describe( 'Banner Component', () => {
  it( 'is defined', () => {
    const assertion = assertOutput(typeof Banner, 'function');
    expect( assertion.actual ).to.eq( assertion.expected );
  });

  it( 'has a div tag', () => {
    const div = wrapper.find('div');
    const hasClass = div.hasClass( `${cssClassName('__banner')}` );

    const assertLength = assertOutput( div.length, 1 );
    const assertClass = assertOutput( hasClass, true );

    expect( assertLength.actual ).to.eq( assertLength.expected );
    expect( assertClass.actual ).to.eq( assertClass.expected );
  });

  it( 'has a Button Component', () => {
    const button = wrapper.find( Button );
    const assertLength = assertOutput( button.length, 1 );
    const assertText = assertOutput( button.text(), 'Close' );

    expect( assertLength.actual ).to.eq( assertLength.expected );
    expect( assertText.actual ).to.eq( assertText.expected );
  });

  it( 'has a text prop', () => {
    const div = wrapper.prop('text');
    const assert = assertOutput( typeof div, 'string' );

    expect( assert.actual ).to.eq( assert.expected );
  });

  xit( 'the Button component deletes the banner', () => {
    wrapper.find( Button ).simulate( 'click' );
    const div = wrapper.find('div');
    const assertLength = assertOutput( div.length, 0 );

    expect( assertLength.actual ).to.eq( assertLength.expected );
  });
});
