import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createHashHistory as createHistory } from 'history';
import { configureStore } from './store';

import { PrivateRoute } from './PrivateRoute';
import Login from '../pages/Login';

import { Home } from '../pages/Home';
import page404 from '../pages/Page404';

export const history = createHistory();
const store = configureStore(history);

export const App = (props: any) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <Route component={page404} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);
