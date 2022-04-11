import {createStore, combineReducers, applyMiddleware} from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import createSagaMiddleware from '@redux-saga/core';
import { rootWatcher } from '../saga';

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootWatcher);