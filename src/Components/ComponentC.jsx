/* eslint-disable no-unused-vars */
import React from "react";
import ComponentD from "./ComponentD";
import { useContext } from "react";
import { countAuth } from "../App";

const ComponentC = () => {
  const { setCount } = useContext(countAuth);
  return (
    <div>
      <div>
        <ComponentD />
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
      </div>
    </div>
  );
};

export default ComponentC;
