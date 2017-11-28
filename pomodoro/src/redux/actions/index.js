const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';

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

export {
  ADD_TASK,
  DELETE_TASK,
  addTask,
  deleteTask
}