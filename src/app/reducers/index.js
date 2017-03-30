/* eslint linebreak-style: ["error", "windows"] */
import {combineReducers} from 'redux';
import todos from './todos';
import mainFocus from './reducer_mainFocus';
import quotes from './quotes';
import hover from './hover';
import links from './links';
import form from './form';

const rootReducer = combineReducers({
  todos, quotes, hover, links, form, mainFocus
});

export default rootReducer;
