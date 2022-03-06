import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App';
import {applyMiddleware, createStore} from 'redux';
import { Provider} from "react-redux";
import reducers from "./reducers";
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancers = composeWithDevTools(applyMiddleware(reduxThunk))
const store = createStore(reducers, composedEnhancers);

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.querySelector('#root')
); 