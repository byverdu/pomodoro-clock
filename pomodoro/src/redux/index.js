import { combineReducers } from 'redux';
import { tasksReducer } from './reducers';
import * as actions from './actions';

const pomodoroReducers = combineReducers({
  tasks: tasksReducer
});

export {
  pomodoroReducers,
  actions
}
