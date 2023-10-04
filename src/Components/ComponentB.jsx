/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import ComponentE from "./ComponentE";
import { countAuth } from "../App";

const ComponentB = () => {
  const { setCount } = useContext(countAuth);
  return (
    <div>
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
        </div>
      </div>
      <ComponentE />
    </div>
  );
};

export default ComponentB;
