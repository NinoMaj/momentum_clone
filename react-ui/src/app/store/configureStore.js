/* eslint linebreak-style: 0 */
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (process.env.NODE_ENV === 'production' ?
  null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
