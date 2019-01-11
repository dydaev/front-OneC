import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';
import { Root } from 'app/containers/Root';
import { TodoApp } from 'app/containers/TodoApp';
import { PrivateRoute } from './PrivateRoute';

import page404 from './pages/Page404';
import Login from './pages/Login';
import Home from './pages/Home';
// render react DOM
export const App = hot(module)(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={TodoApp} />
        <Route path="/" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <Route component={page404} />
      </Switch>
    </Router>
  </Root>
));
