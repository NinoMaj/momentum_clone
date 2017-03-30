import {combineReducers} from 'redux';
import todos from './todos';
import mainFocus from './reducer_mainFocus';

const rootReducer = combineReducers({
  todos,
  mainFocus
});

export default rootReducer;
