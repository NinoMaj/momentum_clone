/* eslint linebreak-style: 0 */
import {combineReducers} from 'redux';
import todos from './todos';
import mainFocus from './reducer_mainFocus';
import quotes from './quotes';
import hover from './hover';
import links from './links';
import form from './form';
import widgets from './widgets';
import token from './token';

const rootReducer = combineReducers({
  todos, quotes, hover, links, form, mainFocus, widgets, token
});

export default rootReducer;
