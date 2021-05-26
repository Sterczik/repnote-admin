import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";

import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker'

import configureStore from 'storeConfig/configureStore'
import { history } from 'helpers/history'

import 'assets/vendor/nucleo/css/nucleo.css'
import 'assets/scss/argon-dashboard-react.scss'

import AdminLayout from 'layouts/Admin'
import AuthLayout from 'layouts/Auth'

// Create a client
const queryClient = new QueryClient()

// const initialState = {}
const store = configureStore() //initialState, history

const MOUNT_NODE = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <Switch>
          <React.StrictMode>
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
            
            <ReactQueryDevtools initialIsOpen />
          </React.StrictMode>
        </Switch>
      </Router>
    </QueryClientProvider>
  </Provider>,
  MOUNT_NODE,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
