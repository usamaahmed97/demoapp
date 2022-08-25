import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfirmRegister from "../ConfirmRegister/ConfirmRegister";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import LoginProvider from "../../context/LoginProvider";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

const AppRouter = () => {
  return (
    <div>
      <LoginProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/confirmRegister" element={<ConfirmRegister />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </div>
  );
};

export default AppRouter;
