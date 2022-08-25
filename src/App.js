import Amplify, { Auth, API } from "aws-amplify";
import React, { Component, useState, useEffect } from "react";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
