import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { reducer } from './src/reducer';
import Todo from './src/components/Todo';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Todo />
      </Provider>
    );
  }
}
