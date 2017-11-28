import {
  expect, assertOutput
} from '../../config/setupTests';

import {
  addTask
} from './index';

describe( 'Actions', () => {
  describe( 'addTask action', () => {
    it( 'is defined', () => {
      expect( addTask ).not.equal( undefined );
    });
    it( 'is a function', () => {
      const assertType = assertOutput( typeof addTask, 'function' );
      expect( assertType.actual ).to.equal( assertType.expected );
    });
    it( 'returns and object', () => {
      expect( addTask())
        .to.be.an( 'object' );
    });
    it( 'with a type prop equal to ADD_TASK', () => {
      expect( addTask())
        .to.have.property( 'type' )
        .that.is.an( 'string' ).and.equal( 'ADD_TASK' );
    });
    it( 'and a task prop equal to object', () => {
      expect( addTask({}))
        .to.have.property( 'task' )
        .that.is.an( 'object' );
    });
  });
});