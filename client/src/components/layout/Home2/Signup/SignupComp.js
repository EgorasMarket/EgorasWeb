import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../../../actions/alert";
import "../../../../css/signup.css";
import { getAuthentication } from "../../../../actions/auth";

const SignupComp = ({ getAuthentication, setAlert }) => {
  const [userAuth, setUserAuth] = useState({
    fullname: "",
    email: "",
    password: "",
    BVN: "",
    phoneNumber: "",
    // confirmpassword: "",
    InfoReason: "",
  });

  const { fullname, email, password, BVN, phoneNumber, InfoReason } = userAuth;
  const onChange = (e) => {
    setUserAuth({ ...userAuth, [e.target.name]: e.target.value });

    // if (e.target.value === "") {
    //   console.log("input something here");
    // } else {
    //   console.log("something is here");
    // }
  };

  const submitData = async (e) => {
    let res = await getAuthentication(
      fullname,
      email,
      password,
      BVN,
      phoneNumber,
      InfoReason
      //   localStorage.referrer
    );
    console.log(res);
    if (res.data.success === true) {
      //   setIsSuccessful(true);
      console.log("okay Good Server");
    } else {
      setAlert(res.data.data.errors[0].msg, "danger");
    }
  };
  return (
    <div className="signup_area">
      <div className="signup_cont">
        <div className="signup_title">Create User Account</div>
        <span className="signup_para">
          Welcome to the future of savings & investments.
        </span>
        <div className="signup_inputs_cont">
          <div className="signup_input_field1_cont">
            <span className="input_title">Full Name</span>
            <input
              type="text"
              name="fullname"
              className="signup_input_field"
              value={fullname}
              onChange={onChange}
            />
          </div>
          <div className="signup_input_field1_cont">
            <span className="input_title">Email address</span>
            <input
              type="email"
              className="signup_input_field"
              value={email}
              name="email"
              onChange={onChange}
            />
          </div>
          <div className="signup_input_field1_cont">
            <span className="input_title">Phone Number</span>
            <input
              type="number"
              className="signup_input_field"
              value={phoneNumber}
              name="phoneNumber"
              onChange={onChange}
            />
          </div>
          <div className="signup_input_field1_cont">
            <span className="input_title">Bank Verification Number (BVN)</span>
            <input
              type="number"
              className="signup_input_field"
              value={BVN}
              name="BVN"
              onChange={onChange}
            />
          </div>
          <div className="signup_input_field1_cont">
            <span className="input_title">Password</span>
            <input
              type="password"
              className="signup_input_field"
              value={password}
              name="password"
              onChange={onChange}
            />
          </div>
          <div className="signup_input_field1_cont">
            <span
              className="input_title"
              // value={password}
              name="password"
              // onChange={onChange}
            >
              Repeat Password
            </span>
            <input type="password" className="signup_input_field" />
          </div>
          <div className="signup_input_field1_cont">
            <span className="input_title">How did you hear about us?</span>

            <select
              className="cust_select"
              name="InfoReason"
              onChange={onChange}
              value={InfoReason}
            >
              <option value="0" className="opt">
                Click to select:
              </option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter</option>
              <option value="Instagram">Instagram</option>
              <option value="Referred">Referred</option>
              <option value="Online Blog">Online Blog</option>
              <option value="Google search">Google search</option>
              <option value="Others">Others</option>
            </select>
            {/* ==[[[[[]]]]] */}

            {/* <input type="" className="signup_input_field" /> */}
          </div>
          <button type="submit" className="sign_up_btn" onClick={submitData}>
            Create account
          </button>
        </div>
      </div>
      <span className="login_txt">
        <a href="/super_admin/user/login" className="login_link">
          Already have an account? Login
        </a>
      </span>
    </div>
  );
};

export default connect(null, { getAuthentication, setAlert })(SignupComp);
