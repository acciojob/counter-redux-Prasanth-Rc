import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Actions
const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

// Store
const store = createStore(counterReducer);

// Counter Component
const Counter = ({ count, increment, decrement }) => (
  <div>
    <h1>{count}</h1>
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  </div>
);

// Connect Component to Redux
const mapStateToProps = state => ({ count: state });
const ConnectedCounter = connect(
  mapStateToProps,
  { increment, decrement }
)(Counter);

// App Component
const App = () => (
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>
);
