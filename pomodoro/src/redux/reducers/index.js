import * as types from '../actions/';
const initialState = [];

export function tasksReducer( state = initialState, action ) {
  switch ( action.type ) {
    case types.ADD_TASK:
      return [
        action.task,
        ...state
      ];
    default:
      return initialState;
  }
}