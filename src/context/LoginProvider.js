import React, { useState } from "react";

import loginContext from "./LoginContext";

const LoginProvider = ({ children }) => {
  const [loginState, setLoginState] = useState(false);

  const loginStateHandler = () => {
    setLoginState(true);
  };

  const logoutStateHandler = () => {
    setLoginState(false);
  };

  return (
    <loginContext.Provider
      value={{ loginState, loginStateHandler, logoutStateHandler }}
    >
      {children}
    </loginContext.Provider>
  );
};

export default LoginProvider;
