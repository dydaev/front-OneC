import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

import MainMenuContainer from './containers/MainMenuContainer';
// import { getToken, getTokenLeftLife, usingCrm } from './utils/auth';

export interface PrivateRoute {
  withoutMenu?: boolean;
  path: string;
  component: JSX.Element;
}

export const PrivateRoute = (props: any) => {
  // usingCrm();
  const Component: any = props.component;
  const ComponentWithMainMenu = (args: any) => {
    return props.withoutMenu ? (
      <Component {...args} />
    ) : (
      <MainMenuContainer {...args}>
        <Component {...args} />
      </MainMenuContainer>
    );
  };
  return process.env.NODE_ENV ===
    'development' /* || (getToken() && getTokenLeftLife()) */ ? (
    // return getToken() && getTokenLeftLife() ? (
    <Route {...props} component={ComponentWithMainMenu} />
  ) : (
    <Redirect to={'/login'} />
  );
};
