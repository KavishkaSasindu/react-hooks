/* eslint-disable no-unused-vars */
import React from "react";
import { createContext, useState } from "react";
import Context2 from "./Context2";

export const userAuth = createContext({});

const Context = () => {
  const [userName, getUserName] = useState("");
  return (
    <userAuth.Provider
      value={{
        userName,
        getUserName,
      }}
    >
      <h1>App {userName}</h1>
      <Context2 />
    </userAuth.Provider>
  );
};

export default Context;
