import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import { cssClassName } from './wording';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { pomodoroReducers } from '../redux';

configure({ adapter: new Adapter() });

function assertOutput( actualParam, expectedParam ) {
  return {
    actual: actualParam,
    expected: expectedParam
  }
}

const store = createStore( pomodoroReducers );

export {
  shallow,
  mount,
  expect,
  React,
  assertOutput,
  cssClassName,
  Provider,
  store
};
