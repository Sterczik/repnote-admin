import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

// Dashboard
import Dashboard from '../Dashboard/index'
import UsersPage from '../Users/index'
import UserPage from '../User/index'
import TrainingsPage from '../Trainings/index'
import TrainingPage from '../Training/index'

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
      path="/users/:id"
      component={UserPage}
    />
    <Route
      exact
      path="/trainings"
      component={TrainingsPage}
    />
    <Route
      exact
      path="/trainings/:id"
      component={TrainingPage}
    />
  </Switch>
)
