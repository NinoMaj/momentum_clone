import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';
import Quotes from './app/containers/Quotes';

import 'todomvc-app-css/index.css';
import './index.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/q" component={Quotes}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
