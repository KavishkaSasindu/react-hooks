/* eslint-disable no-unused-vars */
import React from "react";
import ComponentF from "./ComponentF";
import { useContext } from "react";
import { countAuth } from "../App";

const ComponentA = () => {
  const { setCount } = useContext(countAuth);
  return (
    <div>
      <div>
        <div className="space-x-3">
          <button
            className="btn-1"
            onClick={() => {
              setCount({
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
              setCount({
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
              setCount({
                type: "reset",
              });
            }}
          >
            Reset
          </button>
        </div>
        <ComponentF />
      </div>
    </div>
  );
};

export default ComponentA;
