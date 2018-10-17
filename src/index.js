import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store/store'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={App}></Route>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
