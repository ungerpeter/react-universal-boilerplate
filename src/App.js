import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import routes from './routes';

const App = () => (
  <Router>
    <Fragment>
      <ul>
        <li>
          <Link to={'/'} >Home</Link>
        </li>
        <li>
          <Link to={'/about'} >About</Link>
        </li>
        <li>
          <Link to={'/foobar'} >Non existing page</Link>
        </li>
      </ul>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </Fragment>
  </Router>
);

export default hot(module)(App);