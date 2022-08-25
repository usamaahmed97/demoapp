import { Auth, API } from "aws-amplify";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../../context/LoginContext";

function Signin() {
  const [user, setUser] = useState({ username: "", password: "" });
  const context = useContext(LoginContext);
  const navigate = useNavigate();

  const handleInputChange = (event, keyName) => {
    event.persist();
    setUser((user) => {
      return { ...user, [keyName]: event.target.value };
    });
  };

  const logIn = async () => {
    try {
      await Auth.signIn({
        username: user.username,
        password: user.password,
      });
      context.loginStateHandler();
      const authenticatedUser = await Auth.currentAuthenticatedUser();
      const groups =
        authenticatedUser.signInUserSession.accessToken.payload[
          "cognito:groups"
        ];

      if (groups.includes("superadmin")) {
        console.log("You are in the super admin group");
      } else {
        console.log("You are in the admin group.");
      }
      console.log(groups);
      navigate("/home");
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div
      className="w-full"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="flex items-center justify-center">Login</h1>

        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter Username"
            value={user.username}
            onChange={(e) => handleInputChange(e, "username")}
          />
        </div>

        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="w-100 btn btn-lg btn-primary"
            type="button"
            onClick={logIn}
          >
            Log In
          </button>
        </div>

        <div className="w-full">
          <p
            className="text-gray-700 pb-2 pt-2 text-sm mt-3"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Don't have an account?
          </p>
          <Link
            to={{
              pathname: "/",
            }}
            className="pt-2 text-sm text-blue-500 hover:text-blue-600"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "17px",
            }}
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;
