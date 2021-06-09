import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = [/*logger, */ thunk]

export const store = createStore(reducer, applyMiddleware(...middleware))
