import React from "react";
import "./App.css";
import Left1 from "./components/Left1";
import Right1 from "./components/Right1";
import { createStore } from 'redux';
import { Provider } from "react-redux";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  const newState = { ...currentState };
  if (action.type === "PLUS") {
    newState.number++;
  } else if (action.type === "MINUS") {
    newState.number--;
  }
  return newState;
}

const store = createStore(reducer);

function App() {
  return (
    <div id="container">
      <Provider store={store}>
        <Left1></Left1>
        <Right1></Right1>
      </Provider>
    </div>
  );
}

export default App;
