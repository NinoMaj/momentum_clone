/* eslint linebreak-style: ["error", "windows"] */

// import {ADD_MAIN_FOCUS} from '../constants/ActionTypes';

const initialState = {
  text: '',
  completed: false
};

export default function mainFocus(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MAIN_FOCUS':
      return Object.assign({}, state.mainFocus, action.text);

    case 'DELETE_MAIN_FOCUS':
      return Object.assign({}, initialState);

    // case EDIT_TODO:
    //   return state.map(todo =>
    //     todo.id === action.id ?
    //       Object.assign({}, todo, { text: action.text }) :
    //       todo
    //   );

    case 'COMPLETE_MAIN_FOCUS':
      return Object.assign({}, state, {completed: action.payload});

    // case CLEAR_COMPLETED:
    //   return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}
