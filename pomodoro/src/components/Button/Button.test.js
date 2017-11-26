/* global describe, beforeEach */
import Button from './index';
import {
  mount, React, expect, assertOutput, cssClassName
} from '../../config/setupTests';
import { wording } from '../../config/wording';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Button
      text="Click me!"
      clickHandler={() => {}}
    />
  );
});

describe( 'Button Component', () => {
  it( 'is defined', () => {
    const assertion = assertOutput(typeof Button, 'function');
    expect( assertion.actual ).to.eq( assertion.expected );
  });

  it( 'has a button tag', () => {
    const button = wrapper.find('button');
    const hasClass = button.hasClass( `${cssClassName('__button')}` );

    const assertLength = assertOutput( button.length, 1 );
    const assertClass = assertOutput( hasClass, true );

    expect( assertLength.actual ).to.eq( assertLength.expected );
    expect( assertClass.actual ).to.eq( assertClass.expected );
  });

  it( 'has a text prop', () => {
    const button = wrapper.prop('text');
    const text = wrapper.find('button').text();
    
    const assert = assertOutput( typeof button, 'string' );
    const assertText = assertOutput(text, 'Click me!');
    
    expect( assert.actual ).to.eq( assert.expected );
    expect( assertText.actual ).to.eq( assertText.expected );    
  });

  it( 'has a clickHandler prop', () => {
    const button = wrapper.prop('clickHandler');

    const assert = assertOutput( typeof button, 'function' );
    expect( assert.actual ).to.eq( assert.expected );  
  });
});