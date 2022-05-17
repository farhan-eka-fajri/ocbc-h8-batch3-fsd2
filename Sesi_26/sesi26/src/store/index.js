// install redux terlebih dahulu
// 1. import redux

import { createStore, combineReducers } from 'redux'


//middleware 1 import
import logger from 'redux-logger';
import thunk from'redux-thunk';
import { applyMiddleware } from 'redux';


// 2. inisialisasi: state & reducer
// best practice: kita buat file terpisah

import counterReducer from './reducers/counterReducer';
import userReducer from './reducers/userReducer';

// 3. createStore() + combineReducer()
// karena kita akan memiliki lebih dari 1 reducer

const reducers = combineReducers({
    counter: counterReducer,
    user: userReducer
})

//middleware 2 tambahkan enhancer
const enhancer = applyMiddleware(logger, thunk)

// !deprecated, pengganti dengan Redux Toolkit (RTK) (middleware3)
const store = createStore(reducers, enhancer)

export default store