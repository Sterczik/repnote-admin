import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

// Dashboard
import Dashboard from '../Dashboard/index'
import UsersPage from '../Users/index'
import TrainingsPage from '../Trainings/index'

export default () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Dashboard}
    />
    <Route
      exact
      path="/users"
      component={UsersPage}
    />
    <Route
      exact
      path="/trainings"
      component={TrainingsPage}
    />
  </Switch>
)
