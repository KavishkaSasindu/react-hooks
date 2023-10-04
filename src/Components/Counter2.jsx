/* eslint-disable no-unused-vars */
import React from "react";
import { useReducer, useEffect } from "react";

const initialState = {
  firstCounter: 10,
  secondCounter: 0,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrement":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };
    case "increment5":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrement5":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };
    case "increment1":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "decrement1":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    case "reset1":
      return initialState;

    case "reset2":
      return initialState;
    default:
      return currentState;
  }
};

const Counter2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("UseEffect");
  }, [count]);

  return (
    <div className="space-y-5">
      {/* Counter 1 */}

      <div>
        <h1 className="text-center">Second Counter App</h1>
        <div className="space-x-4">
          <h1>{count.firstCounter}</h1>
          <button
            className="btn-1"
            onClick={() => {
              dispatch({
                type: "increment1",
                value: 1,
              });
            }}
          >
            Increment
          </button>
          <button
            className="btn-1"
            onClick={() => {
              dispatch({
                type: "decrement1",
                value: 1,
              });
            }}
          >
            Decrement
          </button>
          <button
            className="btn-1"
            onClick={() => {
              dispatch({
                type: "reset1",
              });
            }}
          >
            Reset
          </button>
        </div>
      </div>
      {/* counter 2*/}
      <div>
        <h1 className="text-center">Second Counter App</h1>
        <div className="space-x-4">
          <h1>{count.secondCounter}</h1>
          <button
            className="btn-1"
            onClick={() => {
              dispatch({
                type: "increment",
                value: 1,
              });
            }}
          >
            Increment
          </button>
          <button
            className="btn-1"
            onClick={() => {
              dispatch({
                type: "decrement",
                value: 1,
              });
            }}
          >
            Decrement
          </button>
          <button
            className="btn-1"
            onClick={() => {
              dispatch({
                type: "increment5",
                value: 5,
              });
            }}
          >
            Increment 5
          </button>
          <button
            className="btn-1"
            onClick={() => {
              dispatch({
                type: "decrement5",
                value: 5,
              });
            }}
          >
            Decrement 5
          </button>
          <button
            className="btn-1"
            onClick={() => {
              dispatch({
                type: "reset2",
              });
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter2;
