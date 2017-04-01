/* eslint linebreak-style: ["error", "windows"] */

import {ADD_MAIN_FOCUS, COMPLETE_MAIN_FOCUS, DELETE_MAIN_FOCUS} from '../constants/ActionTypes';

const initialState = {
  text: '',
  completed: false
};

export default function mainFocus(state = initialState, action) {
  switch (action.type) {
    case ADD_MAIN_FOCUS:
      return Object.assign({}, state, {text: action.payload});

    case DELETE_MAIN_FOCUS:
      return Object.assign({}, initialState);

    case COMPLETE_MAIN_FOCUS:
      return Object.assign({}, state, {completed: action.payload});

    default:
      return state;
  }
}
