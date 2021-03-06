import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux';
import reducer from './Reducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    ctr: reducer1,
    res: reduecr2
});

//Middleware logic
const Logger = store => {
    return next => {
        return action => {
            console.log('This is middleware');
            const result = next(action);
            return result;
        }
    }
}

const Store = createStore(rootReducer, Logger);

ReactDOM.render(<Provider store={Store}>
    <App />
</Provider>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
