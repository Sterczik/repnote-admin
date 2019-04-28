import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../../components/Header/Header'

export const AppRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => (
      <React.Fragment>
        <Header />
        <Component {...props} />
      </React.Fragment>
    )}
  />
)

export default AppRoute