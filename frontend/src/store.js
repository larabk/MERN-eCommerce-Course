// import { combineReducers, applyMiddleware } from 'redux' OUTDATED
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// const reducer = combineReducers({}) OUTDATED

const initialState = {}

const middleware = [thunk]

const store = configureStore ({
    reducer:{}, 
        initialState
})
// , composeWithDevTools(applyMiddleware(...middleware))) OUTDATED


export default store

