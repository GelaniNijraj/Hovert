import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
window.$ = window.jQuery = require('jquery');
window.$.velocity = require('velocity-animate/velocity.js');
import './index.css';

import { Router, Route, Link, browserHostory, IndexRoute } from 'react-router';

import CreateScene from './CreateScene';

ReactDOM.render(
  <Router history={browserHostory}>
    <Route path='/' component={App}>
      <IndexRoute component={CreateScene} />
      <Route path='create/:editing' component={CreateScene} />
    </Route>
  </Router>,
  document.getElementById('root')
);
