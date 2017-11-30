import * as types from '../actions/';
const initialState = [];

export function tasksReducer( state = initialState, action ) {
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
      return initialState;
  }
}
