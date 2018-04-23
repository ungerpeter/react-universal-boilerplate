import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import {
  Switch,
  Route,
} from 'react-router-dom';
import routes from './routes';
import Menu from './components/molecules/Menu';

const App = () => (<Fragment>
  <Menu />
  <Switch>
    {routes.map((route, i) => (
      <Route key={`route-${i}`} {...route} />
      ))}
  </Switch>
</Fragment>
);

export default hot(module)(App);
