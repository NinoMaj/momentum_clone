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
import quotesSettings from './quotesSettings';
import background from './background_reducer';

const rootReducer = combineReducers({
  todos, quotes, hover, links, form, mainFocus, widgets, token, quotesSettings, background
});

export default rootReducer;
