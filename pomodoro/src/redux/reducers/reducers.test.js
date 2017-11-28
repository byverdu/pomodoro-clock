import { tasksReducer } from '../reducers';
import * as types from '../actions/';
import {
  expect, assertOutput
} from '../../config/setupTests';

describe('tasks reducer', () => {
  it( 'is defined', () => {
    expect( tasksReducer ).not.equal( undefined );
  });
  it('should return the initial state', () => {
    expect(tasksReducer(undefined, {})).to.eql([]);
  })

  it('should handle ADD_TASK', () => {
    const newTask = {
      type: types.ADD_TASK,
      task: {
        text: 'Run the tests',
        completed: false,
        count: 0
      }
    };
    expect(tasksReducer([], newTask )).to.eql([ newTask.task ]);

    // expect(
    //   reducer(
    //     [
    //       {
    //         text: 'Use Redux',
    //         completed: false,
    //         id: 0
    //       }
    //     ],
    //     {
    //       type: types.ADD_TODO,
    //       text: 'Run the tests'
    //     }
    //   )
    // ).toEqual([
    //   {
    //     text: 'Run the tests',
    //     completed: false,
    //     id: 1
    //   },
    //   {
    //     text: 'Use Redux',
    //     completed: false,
    //     id: 0
    //   }
    // ])
  })
})