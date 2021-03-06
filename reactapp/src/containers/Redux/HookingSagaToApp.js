import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './Reducer';
import { Provider } from 'react-redux';
import { createSagaMiddleware } from  'redux-saga';

const rootReducer = combineReducers({
    ctr: reducer1,
    res: reduecr2
});

const createSaga = createSagaMiddleware();

const Store = createStore(rootReducer, applyMiddleware(thunk, createSaga));

createSaga.run(logoutSaga);

ReactDOM.render(<Provider store={Store}>
    <App />
</Provider>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
