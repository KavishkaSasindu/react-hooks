/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Context3 from "./Context3";
import { userAuth } from "./Context";

const Context2 = () => {
  const { userName } = useContext(userAuth);
  return (
    <div>
      <h1>Page 2</h1>
      <h2>{userName}</h2>
      <Context3 />
    </div>
  );
};

export default Context2;
