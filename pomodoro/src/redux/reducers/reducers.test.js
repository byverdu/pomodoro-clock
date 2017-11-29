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
  });
  it('should handle ADD_TASK', () => {
    const newTask = {
      type: types.ADD_TASK,
      task: {
        text: 'First Task',
        completed: false,
        taskId: 0
      }
    };
    expect(tasksReducer([], newTask )).to.eql([ newTask.task ]);
  });
  it('should handle DELETE_TASK', () => {
    const state = [
      {
        text: 'First Task',
        completed: false,
        taskId: 0
      },
      {
        text: 'Second Task',
        completed: false,
        taskId: 1
      }
    ];
    const newState = {
      text: 'First Task',
      completed: false,
      taskId: 0
    };
    const deleteTask = {
      type: types.DELETE_TASK,
      taskId: 1
    };
    expect(tasksReducer(state, deleteTask )).to.eql([ newState ]);
  });
});
