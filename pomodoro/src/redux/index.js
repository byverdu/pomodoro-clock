import { combineReducers } from 'redux';
import { tasksReducer, timerReducer } from './reducers';
import * as actions from './actions';

const pomodoroReducers = combineReducers({
  tasks: tasksReducer,
  timers: timerReducer
});

export {
  pomodoroReducers,
  actions
}
