import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import routes from './routes';
import Menu from './components/molecules/Menu';

const App = () => (
  <Router>
    <Fragment>
      <Menu />
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </Fragment>
  </Router>
);

export default hot(module)(App);