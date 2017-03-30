import {combineReducers} from 'redux';
import todos from './todos';
<<<<<<< HEAD
import mainFocus from './reducer_mainFocus';

const rootReducer = combineReducers({
  todos,
  mainFocus
=======
import quotes from './quotes';
import hover from './hover';
import links from './links';
import form from './form';

const rootReducer = combineReducers({
  todos, quotes, hover, links, form
>>>>>>> 499f3640d8980c4aba863bccd9f8ecb90bb9b92b
});

export default rootReducer;
