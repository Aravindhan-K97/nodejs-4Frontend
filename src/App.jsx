import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Register from "./Components/Register";
import { ToastContainer } from "react-toastify";
import Login from "./Components/Login";
import Home from "./Components/Home";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import VerifyRandomString from "./Components/VerifyRandomString";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {" "}
        {/* Wrap your routes in a Routes component */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          path="/verifyRandomString/:randomString"
          element={<VerifyRandomString />}
        />
        <Route
          path="/resetPassword/:randomString"
          element={<ResetPassword />}
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
