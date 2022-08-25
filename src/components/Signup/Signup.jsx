import Amplify, { Auth, API } from "aws-amplify";
import React, { Component, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import awsconfig from "../../aws-exports";
Amplify.configure(awsconfig);

const Signup = () => {
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      await Auth.signUp({
        username: user.username,
        password: user.password,
        email: user.email,
        attributes: {
          email: user.email,
        },
      });
      console.log("Sign up process done. Now confirm Sign up");
      navigate("/confirmRegister");
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInputChange = (event, keyName) => {
    event.persist();
    setUser((user) => {
      return { ...user, [keyName]: event.target.value };
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <div
        className="w-full max-w-xs"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter Email"
              value={user.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="username"
              id="username"
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={(e) => handleInputChange(e, "username")}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={user.password}
              onChange={(e) => handleInputChange(e, "password")}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => signUp()}
            >
              Sign Up
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/"
            >
              Forgot Password?
            </a>
          </div>
          <div className="w-full">
            <p
              className="text-gray-700 pb-2 pt-2 text-sm"
              style={{ textAlign: "center" }}
            >
              You already have an account?
            </p>
            <Link
              to={{
                pathname: "/login",
              }}
              className="pt-2 text-sm text-blue-500 hover:text-blue-600"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "17px",
              }}
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
