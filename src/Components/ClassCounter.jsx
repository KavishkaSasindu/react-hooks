import { useState } from "react";

const ClassCounter = () => {
  const [count, setCount] = useState(0);

  const handleData = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex justify-center">
      <div className="space-y-5">
        <h1 className="text-2xl">Class Counter</h1>
        <div className="space-y-3">
          <h2 className="text-2xl">{count}</h2>
          <button
            className="px-4 py-2 bg-slate-300 rounded-md shadow-lg"
            onClick={handleData}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCounter;
