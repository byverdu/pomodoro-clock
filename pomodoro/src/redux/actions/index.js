const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const COMPLETED_TASK = 'COMPLETED_TASK';

function addTask( task ) {
  return {
    type: ADD_TASK,
    task
  }
}

function deleteTask( id ) {
  return {
    type: DELETE_TASK,
    id
  }
}

function completedTask( id, completed ) {
  return {
    type: COMPLETED_TASK,
    id,
    completed
  }
}

export {
  ADD_TASK,
  DELETE_TASK,
  COMPLETED_TASK,
  addTask,
  deleteTask,
  completedTask
}
