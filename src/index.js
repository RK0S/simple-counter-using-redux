import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const defaultState = {
    count: 0
}


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_ONE':
            return {...state, count: state.count + action.payload}
        case 'REMOVE_ONE':
            return {...state, count: state.count - action.payload}
        default:
            return state
    }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);