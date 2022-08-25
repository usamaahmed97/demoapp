import { Auth, API } from "aws-amplify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Authenticator } from "aws-amplify-react";

const ConfirmRegister = () => {
  const [user, setUser] = useState({ username: "", authenticationCode: "" });
  const navigate = useNavigate();

  const handleInputChange = (event, keyName) => {
    event.persist();
    setUser((user) => {
      return { ...user, [keyName]: event.target.value };
    });
  };

  async function addToGroup() {
    let apiName = "AdminQueries";
    let path = "/addUserToGroup";
    let myInit = {
      body: {
        username: "awesomeeditor",
        groupname: "superadmin",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };

    return await API.post(apiName, path, myInit);
  }

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(user.username, user.authenticationCode);
      console.log("User Signed up Successfully. Redirected to Homepage now.");
      navigate("/home");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <h3 className="text-lg text-gray-700">Confirm your account</h3>
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter Username"
            value={user.username}
            onChange={(e) => handleInputChange(e, "username")}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="code"
            id="code"
            type="text"
            placeholder="Code"
            value={user.authenticationCode}
            onChange={(e) => handleInputChange(e, "authenticationCode")}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={confirmSignUp}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmRegister;
