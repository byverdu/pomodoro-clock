import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import { cssClassName } from './wording';

configure({ adapter: new Adapter() });

function assertOutput( actualParam, expectedParam ) {
  return {
    actual: actualParam,
    expected: expectedParam
  }
}

export {
  shallow, mount, expect, React, assertOutput, cssClassName
};
