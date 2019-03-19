import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Dashboard
import Dashboard from '../Dashboard/index';

export default () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Dashboard}
    />
  </Switch>
)
