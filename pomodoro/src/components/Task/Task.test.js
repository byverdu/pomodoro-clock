/* global describe, beforeEach */
import Task from './index';
import {
  mount, React, expect, assertOutput, cssClassName
} from '../../config/setupTests';
import { wording } from '../../config/wording';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Task
      text="Finish unit test"
      count={0}
    />
  );
});

describe( 'Task Component', () => {
  it( 'is defined', () => {
    const assertion = assertOutput(typeof Task, 'function');
    expect( assertion.actual ).to.eq( assertion.expected );
  });

  it( 'has a list item tag', () => {
    const li = wrapper.find('li');
    const hasClass = li.hasClass( `${cssClassName('__task')}` );

    const assertLength = assertOutput( li.length, 1 );
    const assertClass = assertOutput( hasClass, true );

    expect( assertLength.actual ).to.eq( assertLength.expected );
    expect( assertClass.actual ).to.eq( assertClass.expected );
  });

  it( 'has a label tag', () => {
    const label = wrapper.find('label');
    const hasClass = label.hasClass( `${cssClassName('__task--label')}` );
    const text = label.text();

    const assertLength = assertOutput( label.length, 1 );
    const assertClass = assertOutput( hasClass, true );
    const assertText = assertOutput(text, '1. Finish unit test');
    
    expect( assertLength.actual ).to.eq( assertLength.expected );
    expect( assertClass.actual ).to.eq( assertClass.expected );
    expect( assertText.actual ).to.eq( assertText.expected );
  });

  it( 'has a text prop', () => {
    const task = wrapper.prop('text');
    const assert = assertOutput( typeof task, 'string' );

    expect( assert.actual ).to.eq( assert.expected );
  });

  it( 'has a count prop', () => {
    const task = wrapper.prop('count');
    const assert = assertOutput( typeof task, 'number' );

    expect( assert.actual ).to.eq( assert.expected );
  });

  it( 'has a checkbox', () => {
    const checkbox = wrapper.find('input[type="checkbox"]');
    const hasClass = checkbox.hasClass( `${cssClassName('__task--check')}` );

    const assertLength = assertOutput( checkbox.length, 1 );
    const assertClass = assertOutput( hasClass, true );

    expect( assertLength.actual ).to.eq( assertLength.expected );
    expect( assertClass.actual ).to.eq( assertClass.expected );
  });

  xit( 'when task is done checkbox gets new CSS styles', () => {
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.simulate('change');
    const parent = wrapper.find('label');
    const hasClass = parent.hasClass( `${cssClassName('__task--label')} task-done` );
    
    console.log(parent.html());
    const assertClass = assertOutput( hasClass, true );

    expect( assertClass.actual ).to.eq( assertClass.expected );
  });
});