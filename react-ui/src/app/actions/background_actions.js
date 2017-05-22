export const BACKGROUND_ASYNC_REQUEST = 'BACKGROUND_ASYNC_REQUEST';
export const ADD_BACKGROUND_ASYNC_SUCCESS = 'BACKGROUND_ASYNC_SUCCESS';
export const GET_BACKGROUNDS_ASYNC_SUCCESS = 'BACKGROUND_ASYNC_SUCCESS';
export const SAVE_BACKGROUND_ASYNC_SUCCESS = 'SAVE_BACKGROUND_ASYNC_SUCCESS';
export const BACKGROUND_ASYNC_FAILURE = 'BACKGROUND_ASYNC_FAILURE';

export const backgroundAsyncRequest = payload => ({
  type: BACKGROUND_ASYNC_REQUEST,
  payload
});

export const addBackgroundAsyncSuccess = payload => ({
  type: ADD_BACKGROUND_ASYNC_SUCCESS,
  payload
});

export const getBackgroundsAsyncSuccess = payload => ({
  type: GET_BACKGROUNDS_ASYNC_SUCCESS,
  payload
});

export const saveBackgroundAsyncSuccess = payload => ({
  type: SAVE_BACKGROUND_ASYNC_SUCCESS,
  payload
});

export const backgroundAsyncFailure = payload => ({
  type: BACKGROUND_ASYNC_FAILURE,
  payload
});

export const addBackgroundAsync = () => dispatch => {
  dispatch(backgroundAsyncRequest());
  return fetch('background/addBackgroundHistory/', {
    method: 'POST',
    headers: {
      authorization: localStorage.token
    }
  })
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then(background => {
      if (!background) {
        throw Error('No message received');
      }
      dispatch(addBackgroundAsyncSuccess(background));
    })
    .catch(error => {
      console.error('catch in backgroundAsync in addBackgroundAsync', error);
      dispatch(backgroundAsyncFailure(error));
    });
};

export const saveBackgroundAsync = backgroundToSave => dispatch => {
  dispatch(backgroundAsyncRequest());
  return fetch(`background/saveToFavorites/${encodeURIComponent(backgroundToSave)}`, {
    method: 'POST',
    body: encodeURIComponent(backgroundToSave),
    headers: {
      authorization: localStorage.token
    }
  })
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then(background => {
      if (!background) {
        throw Error('No message received');
      }
      dispatch(saveBackgroundAsyncSuccess(background));
    })
    .catch(error => {
      console.error('catch in saveBackgroundAsync', error);
      dispatch(backgroundAsyncFailure(error));
    });
};
