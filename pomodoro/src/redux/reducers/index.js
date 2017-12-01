import * as types from '../actions/';

const tasksInitialState = [];
const timerInitialState = {
  counter: 0
};

function tasksReducer( state = tasksInitialState, action ) {
  switch ( action.type ) {
    case types.ADD_TASK:
      return [
        ...state,
        action.task
      ];

    case types.DELETE_TASK:
      return state.filter( task => task.id !== action.id );

    case types.COMPLETED_TASK:
      return state.map(task =>
        (task.id === action.id) 
          ? {...task, completed: action.completed}
          : task
      );

    case types.DELETE_COMPLETED_TASKS:
      return state
        .filter( task => !task.completed )
        .map(( newTask, index ) => {
          newTask.id = index;
          return newTask;
        });

    default:
      return state;
  }
}

function timerReducer( state = timerInitialState, action ) {
  switch ( action.type ) {
    case types.START_TIMER:
      const newCounter = state.counter + 1;
      return Object.assign(state, {counter: newCounter});
    case types.END_TIMER:
      if ( action.counter === 4 ) {
        return Object.assign(state, {counter: 0});
      }
      return;
    default:
      return state;
  }
}

export {
  tasksReducer,
  timerReducer
}
