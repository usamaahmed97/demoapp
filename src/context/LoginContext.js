import React from "react";

const LoginContext = React.createContext({
  loginState: false,
  setLoginState: () => {},
});

export default LoginContext;
