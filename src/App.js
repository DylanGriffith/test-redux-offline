import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
import { Provider } from 'react-redux'
import ConnectedButton from './ConnectedButton';

const middleware = [];
const app = (state = {}, action = {}) => {
  console.log('action: ', action);
  return state;
}
const reducer = combineReducers({
    app,
});
const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(...middleware),
    offline(offlineConfig)
  )
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Provider store={store}>
            <ConnectedButton />
          </Provider>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
