import {combineReducers} from 'redux';
import todos from './todos';
import quotes from './quotes';
import hover from './hover';

const rootReducer = combineReducers({
  todos, quotes, hover
});

export default rootReducer;
