/* eslint linebreak-style: 0 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
// const composeEnhancers = (process.env.NODE_ENV === 'production' ?
//   null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
console.log(process.env.ENV);
const bla = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    bla(applyMiddleware(thunkMiddleware))
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
