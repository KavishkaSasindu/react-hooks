import { useState, useEffect } from "react";

const HookCounter4 = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("UseEffect");
  }, [items]);

  return (
    <div>
      <button
        className="btn-1"
        onClick={() => {
          setItems((pre) => {
            return [
              ...pre,
              {
                id: pre.length,
                value: Math.random(),
              },
            ];
          });
        }}
      >
        Add
      </button>
      <ul className="mt-6">
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
};

export default HookCounter4;
