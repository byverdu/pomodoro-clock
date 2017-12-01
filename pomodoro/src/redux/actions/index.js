const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const COMPLETED_TASK = 'COMPLETED_TASK';
const DELETE_COMPLETED_TASKS = 'DELETE_COMPLETED_TASKS';
const START_TIMER = 'START_TIMER';
const END_TIMER = 'END_TIMER';

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

function deleteCompletedTasks() {
  return {
    type: DELETE_COMPLETED_TASKS
  }
}

function startTimer() {
  return {
    type: START_TIMER
  }
}

function endTimer( counter ) {
  return {
    type: END_TIMER,
    counter
  }
}

export {
  ADD_TASK,
  DELETE_TASK,
  COMPLETED_TASK,
  DELETE_COMPLETED_TASKS,
  START_TIMER,
  END_TIMER,
  addTask,
  deleteTask,
  completedTask,
  deleteCompletedTasks,
  startTimer,
  endTimer
}
