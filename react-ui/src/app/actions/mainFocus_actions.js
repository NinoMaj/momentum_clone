/* eslint linebreak-style: 0 */
import * as types from '../constants/ActionTypes';

export function addMainFocus(text) {
  return {type: types.ADD_MAIN_FOCUS, payload: text};
}

export function completeMainFocus(completed) {
  return {type: types.COMPLETE_MAIN_FOCUS, payload: completed};
}

export function deleteMainFocus() {
  return {type: types.DELETE_MAIN_FOCUS, payload: true};
}
