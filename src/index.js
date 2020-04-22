import React from 'react';
import ReactDOM from 'react-dom';
//import App from 'containers/App'
import Router from 'Router';
import Modal from 'components/Modal/Modal';
//import * as serviceWorker from 'serviceWorker';
import 'tachyons';

//const store = createStore(rootReducer)
ReactDOM.render(
    <Router />,document.getElementById('root'));

ReactDOM.render(
    <Modal />,document.getElementById('modal-root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
