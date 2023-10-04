/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { userAuth } from "./Context";

const Context3 = () => {
  const { getUserName, userName } = useContext(userAuth);

  return (
    <div>
      <h1>Page 3</h1>
      <h2>{userName}</h2>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => getUserName(e.target.value)}
      />
    </div>
  );
};

export default Context3;
