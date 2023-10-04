import { useState, useEffect } from "react";

const HookCounter2 = () => {
  const initialCount = 0;

  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log("UseEffect Count");
    setCount(count);
  }, [count]);

  return (
    <div className="mt-10 space-y-4">
      <h1 className="text-2xl ">Counter App 2</h1>
      <h1>Count : {count}</h1>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-slate-300 rounded-lg shadow-md hover:scale-110 transition-all duration-300"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Increase
        </button>
        <button
          className="px-4 py-2 bg-slate-300 rounded-lg shadow-md hover:scale-110 transition-all duration-300"
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          Decrease
        </button>
        <button
          className="px-4 py-2 bg-slate-300 rounded-lg shadow-md hover:scale-110 transition-all duration-300"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default HookCounter2;
