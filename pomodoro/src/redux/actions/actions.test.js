import {
  expect, assertOutput
} from '../../config/setupTests';

import {
  addTask, deleteTask
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
    it( 'and a task prop that is an object', () => {
      expect( addTask({}))
        .to.have.property( 'task' )
        .that.is.an( 'object' );
    });
  });
  describe( 'deleteTask action', () => {
    it( 'is defined', () => {
      expect( deleteTask ).not.equal( undefined );
    });
    it( 'is a function', () => {
      const assertType = assertOutput( typeof deleteTask, 'function' );
      expect( assertType.actual ).to.equal( assertType.expected );
    });
    it( 'returns and object', () => {
      expect( deleteTask())
        .to.be.an( 'object' );
    });
    it( 'with a type prop equal to DELETE_TASK', () => {
      expect( deleteTask())
        .to.have.property( 'type' )
        .that.is.an( 'string' ).and.equal( 'DELETE_TASK' );
    });
    it( 'and a task prop equal that is a number', () => {
      expect( deleteTask(0))
        .to.have.property( 'taskId' )
        .that.is.a( 'number' );
    });
  });
});