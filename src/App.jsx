import { useState } from "react";

import "./App.css";
import { useReducer } from "react";
import { counterReducer } from "./hooks/counterReducer";
import { Button } from "./component/Button";

function App() {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    color: "black",
  });
  const btnName = [
    "Increment",
    "Decrement",
    "Reset",
    "Increment by 10",
    "Decrement by 5",
  ];

  return (
    <div className="main-container">
      <h1 style={{ color: state.color }}>Counter :{state.count}</h1>
      <div className="btn-section">
        <Button
          handleCount={() => {
            dispatch({ type: "increment" });
          }}
        >
          {btnName[0]}
        </Button>

        <Button handleCount={() => dispatch({ type: "decrement" })}>
          {btnName[1]}
        </Button>
        <Button handleCount={() => dispatch({ type: "reset" })}>
          {btnName[2]}
        </Button>
        <Button
          handleCount={() => dispatch({ type: "increment_by", payload: 10 })}
        >
          {btnName[3]}
        </Button>
        <Button
          handleCount={() => dispatch({ type: "decrement_by", payload: 5 })}
        >
          {btnName[4]}
        </Button>
      </div>
    </div>
  );
}

export default App;
