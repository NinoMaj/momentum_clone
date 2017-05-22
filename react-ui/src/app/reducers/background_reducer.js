import {
  // ADD_BACKGROUND,
  BACKGROUND_ASYNC_REQUEST,
  ADD_BACKGROUND_ASYNC_SUCCESS,
  SAVE_BACKGROUND_ASYNC_SUCCESS,
  BACKGROUND_ASYNC_FAILURE
} from '../actions/background_actions';

const initialState = {
  backgrounds: [],
  loading: false
};

const backgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case BACKGROUND_ASYNC_REQUEST:
      return Object.assign({}, state, {loading: true});
    case ADD_BACKGROUND_ASYNC_SUCCESS:
      return Object.assign({}, state, {backgrounds: [...action.payload]}, {loading: false});
    case SAVE_BACKGROUND_ASYNC_SUCCESS:
      return Object.assign({}, state, {backgrounds: [
        ...state.backgrounds.slice(0, action.payload.index),
        action.payload.item,
        ...state.backgrounds.slice(action.payload.index + 1)
      ]}, {loading: false});
    case BACKGROUND_ASYNC_FAILURE:
      return Object.assign({}, state, {error: true});
    default:
      return state;
  }
};

export default backgroundReducer;
