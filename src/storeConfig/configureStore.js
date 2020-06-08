import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'

import authReducer from 'store/auth/reducer'
import globalReducer from 'store/global/reducer'

import { jwt } from './middlewares/jwt'

/* eslint-disable no-underscore-dangle, indent */
const composeEnhancers = process.env.NODE_ENV !== 'production'
&& typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      global: globalReducer,
    }),
    composeEnhancers(applyMiddleware(jwt, thunk))
  )

  return store
}
