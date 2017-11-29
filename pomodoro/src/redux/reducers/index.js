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
      console.log(state, action.taskId)
      return state.filter( task => task.taskId !== action.taskId );
    default:
      return initialState;
  }
}