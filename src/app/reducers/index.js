import {combineReducers} from 'redux';
import todos from './todos';
import quotes from './quotes';
import hover from './hover';
import links from './links';
import form from './form';

const rootReducer = combineReducers({
  todos, quotes, hover, links, form
});

export default rootReducer;
