import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import "../AdminStyles/registerCustomer.css";
import SignupComp from "../../Home2/Signup/SignupComp";
import LoginComp from "../../Home2/Login/LoginComp";
const RegisterCustomer = () => {
  const currentPage = window.location.pathname;
  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <SignupComp />
        </div>
      </section>
    </div>
  );
};

export default RegisterCustomer;
