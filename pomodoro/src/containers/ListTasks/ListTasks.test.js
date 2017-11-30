/* global describe, beforeEach */
import ListTasks from './index';
import Button from '../../components/Button';
import Task from '../../components/Task';
import {
  mount,
  React,
  expect,
  assertOutput, 
  cssClassName,
  Provider,
  store
} from '../../config/setupTests';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>    
      <ListTasks />
    </Provider>
  );
});

describe( 'ListTasks Component', () => {
  it( 'is defined', () => {
    const assertion = assertOutput(typeof ListTasks, 'function');
    expect( assertion.actual ).to.eq( assertion.expected );
  });

  it( 'has a Button Component', () => {
    const button = wrapper.find(Button);
    const text = button.at(0).text();    
    
    const assertText = assertOutput(text, 'Add Task');    
    const assertLength = assertOutput( button.length, 2 );
    
    expect( assertLength.actual ).to.eq( assertLength.expected );
    expect( assertText.actual ).to.eq( assertText.expected );
  });
  
  it( 'has a input tag', () => {
    const input = wrapper.find('input[type="text"]');

    const assertLength = assertOutput( input.length, 1 );
    
    expect( assertLength.actual ).to.eq( assertLength.expected );
  });

  it( 'has a ul tag with a default li tag', () => {
    const ul = wrapper.find('ul');
    const li = wrapper.find('li').at(0);
    const text = li.text();    

    const assertLengthUl = assertOutput( ul.length, 1 );
    const assertLengthLi = assertOutput( li.length, 1 );
    const assertText = assertOutput(text, 'Tasks To Do');

    expect( assertLengthUl.actual ).to.eq( assertLengthUl.expected );
    expect( assertLengthLi.actual ).to.eq( assertLengthLi.expected );
    expect( assertText.actual ).to.eq( assertText.expected );
  });

  xit( 'the Button Component will add a new Task', () => {
    wrapper.find(Button).simulate('click');
    const li = wrapper.find('li');
    const assertLengthLi = assertOutput( li.length, 2 );

    expect( assertLengthLi.actual ).to.eq( assertLengthLi.expected );
  });
});
