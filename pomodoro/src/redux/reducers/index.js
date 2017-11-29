import * as types from '../actions/';
const initialState = [];

export function tasksReducer( state = initialState, action ) {
  switch ( action.type ) {
    case types.ADD_TASK:
      return [
        action.task,
        ...state
      ];

    case types.DELETE_TASK:
      return state.filter( task => task.id !== action.id );

    case types.COMPLETED_TASK:
    return state.map(task =>
      (task.id === action.id) 
        ? {...task, completed: action.completed}
        : task
    )

    default:
      return initialState;
  }
}
