import {createStore ,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import combineReducers  from './reducers'
 
const store = configureStore({ reducer: combineReducers })
export default store