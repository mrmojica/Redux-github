var React = require('react');
var ReactDOM = require('react-dom');
//This passes the Redux store down to any components which request access to part of it. 
var Provider = require('react-redux').Provider;

var store = require('./reducers/store');
var RepositoryList = require('./components/repository-list');


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
    	//Notice how you pass in the store as a prop of Provider.
        <Provider store={store}>
            <RepositoryList />
        </Provider>,
        document.getElementById('container')
    );
});



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
