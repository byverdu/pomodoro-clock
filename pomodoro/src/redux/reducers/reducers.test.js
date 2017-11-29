import { tasksReducer } from '../reducers';
import * as types from '../actions/';
import {
  expect, assertOutput
} from '../../config/setupTests';

function sampleData() {
  return [
    {
      text: 'First Task',
      completed: false,
      id: 0
    },
    {
      text: 'Second Task',
      completed: false,
      id: 1
    }
  ];
}

function completedTaskSample( completed ) {
  return {
    state: sampleData(),
    completedTask: {
      type: types.COMPLETED_TASK,
      id: 1,
      completed
    },
    newState: {
      text: 'Second Task',
      completed,
      id: 1
    }
  }
}

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
        id: 0
      }
    };
    expect(tasksReducer([], newTask )).to.eql([ newTask.task ]);
  });
  it('should handle DELETE_TASK', () => {
    const state = sampleData();
    const newState = {
      text: 'First Task',
      completed: false,
      id: 0
    };
    const deleteTask = {
      type: types.DELETE_TASK,
      id: 1
    };
    expect(tasksReducer(state, deleteTask )).to.eql([ newState ]);
  });
  it('should handle COMPLETED_TASK for completed', () => {
    const data = completedTaskSample( true );
    const expected = tasksReducer(data.state, data.completedTask );

    expect(expected[1]).to.eql( data.newState );
  });
  it('should handle COMPLETED_TASK for uncompleted', () => {
    const data = completedTaskSample( false );
    const expected = tasksReducer(data.state, data.completedTask );

    expect(expected[1]).to.eql( data.newState );
  });
});
