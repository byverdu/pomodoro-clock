import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import React from 'react';

configure({ adapter: new Adapter() });

export {
  shallow, mount, expect, React
};