import { tasksReducer, timerReducer } from '../reducers';
import * as types from '../actions/';
import {
  expect, assertOutput
} from '../../config/setupTests';

function sampleDataTasks( completed ) {
  return [
    {
      text: 'First Task',
      completed,
      id: 0
    },
    {
      text: 'Second Task',
      completed,
      id: 1
    },
    {
      text: 'Third Task',
      completed,
      id: 2
    }
  ];
}

function completedTaskSample( completed ) {
  return {
    state: sampleDataTasks( false ),
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

function sampleDataTime() {
  return {
    counter: 0,
    timerType: '',
    disabled: false 
  };
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
    const state = sampleDataTasks( false );
    const newState = {
      text: 'First Task',
      completed: false,
      id: 0
    };
    const deleteTask = {
      type: types.DELETE_TASK,
      id: 1
    };
    expect(tasksReducer(state, deleteTask )).to.have.length( 2 );
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
  it('should handle DELETE_COMPLETED_TASKS', () => {
    const data = sampleDataTasks( true );
    data[0].completed = false;
    const deleteCompletedTasks = {
      type: types.DELETE_COMPLETED_TASKS
    };
    const newState = {
      text: 'First Task',
      completed: false,
      id: 0
    };
    expect(tasksReducer(data, deleteCompletedTasks )).to.eql([ newState ]);
  });
});

describe('timer reducer', () => {
  it( 'is defined', () => {
    expect( timerReducer ).not.equal( undefined );
  });
  it('should return the initial state', () => {
    const timerState = sampleDataTime();
    expect(timerReducer(undefined, {})).to.eql( timerState );
  });
  it('should handle START_TIMER for a pomodoro timer', () => {
    const timerState = sampleDataTime();
    const startTimer = {
      type: types.START_TIMER,
      timerType: 'pomodoro'
    };

    expect(timerReducer(timerState, startTimer ).counter).to.eql( 1 );
  });
  it('should handle END_TIMER action', () => {
    const timerState = sampleDataTime();
    const endTimer = {
      type: types.END_TIMER
    };
    const startTimer = {
      type: types.START_TIMER,
      timerType: 'pomodoro'      
    };
    expect(timerReducer(timerState, endTimer ).counter).to.eql( 0 );
    expect(timerReducer(timerState, startTimer ).counter).to.eql( 1 );
  });
});