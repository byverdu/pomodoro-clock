const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const COMPLETED_TASK = 'COMPLETED_TASK';

function addTask( task ) {
  return {
    type: ADD_TASK,
    task
  }
}

function deleteTask( taskId ) {
  return {
    type: DELETE_TASK,
    taskId
  }
}

function completedTask( taskCompleted ) {
  return {
    type: COMPLETED_TASK,
    taskCompleted
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