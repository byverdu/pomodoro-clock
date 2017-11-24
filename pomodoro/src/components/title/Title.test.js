/* global describe, beforeEach */
import Header from './index';
import {
  mount, React, expect, assertOutput
} from '../../config/setupTests';
import { wording } from '../../config/wording';

let wrapper;

beforeEach(() => {
  wrapper = mount( <Header title={wording.title}/> );
});

describe( 'Header Component', () => {
  it( 'is defined', () => {
    const assertion = assertOutput(typeof Header, 'function');
    expect( assertion.actual ).to.eq( assertion.expected );
  });

  it( 'has a header tag', () => {
    const header = wrapper.find('header');
    const hasClass = header.hasClass( 'title' );
    const assertLenght = assertOutput( header.length, 1 );
    const assertClass = assertOutput( hasClass, true );

    expect( assertLenght.actual ).to.eq( assertLenght.expected );
    expect( assertClass.actual ).to.eq( assertClass.expected );
  });

  it( 'has a heading 1 tag', () => {
    const header = wrapper.find('h1');
    const text = header.text();
    const assertLenght = assertOutput(header.length, 1);
    const assertText = assertOutput(text, 'Pomodoro Timer');
    expect( assertLenght.actual ).to.eq( assertLenght.expected );
    expect( assertText.actual ).to.eq( assertText.expected );  });
});