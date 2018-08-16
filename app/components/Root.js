import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import routes from '../constants/routes.json';
import Home from './Home';

export default () => (
  <HashRouter>
    <Switch>
      <Route path={routes.HOME} component={Home} />
    </Switch>
  </HashRouter>
);
