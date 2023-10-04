/* eslint-disable no-unused-vars */
import React from "react";
import { useReducer, useEffect } from "react";

const initialState = 0;

const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
  }
};

const Counter1 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("UseEffect");
  }, [count]);

  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-center">My Counter App</h1>
        <div className="space-x-4">
          <h1>{count}</h1>
          <button
            className="btn-1"
            onClick={() => {
              dispatch("increment");
            }}
          >
            Increment
          </button>
          <button
            className="btn-1"
            onClick={() => {
              dispatch("decrement");
            }}
          >
            Decrement
          </button>
          <button
            className="btn-1"
            onClick={() => {
              dispatch("reset");
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter1;
