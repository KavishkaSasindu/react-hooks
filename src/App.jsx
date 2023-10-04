/* eslint-disable no-unused-vars */
import "./App.css";
import ClassCounter from "./Components/ClassCounter";
import HookCounter2 from "./Components/HookCounter2";
import HookCounter3 from "./Components/HookCounter3";
import HookCounter4 from "./Components/HookCounter4";
import Context from "./Components/Context";
import Counter1 from "./Components/Counter1";
import Counter2 from "./Components/Counter2";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC";
import { useReducer, createContext } from "react";

const initialState = 0;

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return currentState + action.value;
    case "decrement":
      return currentState - action.value;
    case "reset":
      return initialState;
    default:
      return initialState;
  }
};

export const countAuth = createContext({});

export function App() {
  const [count, setCount] = useReducer(reducer, initialState);

  return (
    <div className="space-y-5">
      {/* <ClassCounter />
      <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter4 /> */}
      {/* <Context /> */}
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      <countAuth.Provider value={{ count, setCount }}>
        <h1>{count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </countAuth.Provider>
    </div>
  );
}

export default App;
