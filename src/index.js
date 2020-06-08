import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import configureStore from 'storeConfig/configureStore'
import { history } from 'helpers/history'

import 'assets/vendor/nucleo/css/nucleo.css'
import 'assets/vendor/@fortawesome/fontawesome-free/css/all.min.css'
import 'assets/scss/argon-dashboard-react.scss'

import AdminLayout from 'layouts/Admin'
import AuthLayout from 'layouts/Auth'

const initialState = {}
const store = configureStore(initialState, history)

const MOUNT_NODE = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route
          path="/admin"
          render={props => (
            store.getState().auth.loggedIn && !store.getState().auth.loggingIn ? (
              <AdminLayout {...props} />
            ) : (
              <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
            )
          )}
        />
        <Route
          path="/auth"
          render={props => (
            store.getState().auth.loggedIn && !store.getState().auth.loggingIn ? (
              <Redirect to={{ pathname: '/admin/dashboard', state: { from: props.location } }} />
            ) : (
              <AuthLayout {...props} />
            )
          )}
        />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
  </Provider>,
  MOUNT_NODE,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
