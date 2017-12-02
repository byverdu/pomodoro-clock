import * as types from '../actions/';

const tasksInitialState = [];
const timerInitialState = {
  counter: 0,
  timerType: '',
  disabled: false 
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
    {
      const newCounter = (action.timerType === 'pomodoro') ?
        state.counter + 1 :
        state.counter;
      const newState = {
        counter: newCounter,
        timerType: action.timerType,
        disabled: true
      }
      return Object.assign({}, state, newState);
    }

    case types.END_TIMER:
    {
      if ( state.counter === 4 ) {
        const newState = {
          counter: 0,
          timerType: '',
          disabled: false
        }
        return Object.assign({}, state, newState);
      }
      return Object.assign({}, state, { disabled: false });
    }

    default:
    return state;
  }
}

export {
  tasksReducer,
  timerReducer
}
