import { useState, useEffect } from "react";

const HookCounter3 = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    console.log("nam Changed UseEffect Hook");
  }, [name]);
  return (
    <div className="space-y-6">
      <h2 className="text-2xl]">{name.firstName}</h2>
      <input
        type="text"
        placeholder="First Name"
        className="bg-slate-200 rounded-md p-2 outline-none shadow-md"
        onChange={(e) => {
          setName({
            ...name,
            firstName: e.target.value,
          });
        }}
      />
      <h2 className="text-2xl]">{name.lastName}</h2>
      <input
        type="text"
        placeholder="Last Name"
        className="bg-slate-200 rounded-md p-2 outline-none shadow-md"
        onChange={(e) => {
          setName({
            ...name,
            lastName: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default HookCounter3;
