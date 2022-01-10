import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../../../actions/alert";
import "../../../../css/signup.css";
import { getAuthentication } from "../../../../actions/auth";
const Signup = ({ getAuthentication, setAlert }) => {
  const [userAuth, setUserAuth] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    // confirmpassword: "",
    ref: "",
  });

  const { fullname, email, password, phoneNumber } = userAuth;
  const onChange = (e) => {
    setUserAuth({ ...userAuth, [e.target.name]: e.target.value });

    // if (e.target.value === "") {
    //   console.log("input something here");
    // } else {
    //   console.log("something is here");
    // }
  };

  const submitData = async (e) => {
    // if (
    //   fullname === "" ||
    //   email === "" ||
    //   password === "" ||
    //   //   confirmpassword === "" ||
    //   phoneNumber === ""
    // ) {
    //   setAlert("All fields are required", "danger");
    //   // setIsLoading(false);
    // } else {
    //   if (password !== confirmpassword) {
    //     setAlert("Passwords do not match", "danger");
    //   } else {
    //     if (typeof localStorage.referrer !== "undefined") {
    //       // console.log(localStorage.referrer);
    //       // setUserAuth()
    //       let res = await getAuthentication(
    //         fullname,
    //         email,
    //         password,
    //         phoneNumber,
    //         // walletAddress,
    //         localStorage.referrer
    //       );
    //       console.log(res);
    //       if (res.data.success === true) {
    //         console.log("okay Good Server");
    //       } else {
    //         setAlert(res.data.data.errors[0].msg, "danger");
    //       }
    //     } else {
    //       let res = await getAuthentication(
    //         fullname,
    //         email,
    //         password,
    //         phoneNumber,
    //         ""
    //       );
    //       console.log(res.data);
    //       if (res.data.success === true) {
    //         console.log("okay Good Server");
    //       } else {
    //         setAlert(res.data.data.errors[0].msg, "danger");
    //       }
    //     }
    //   }
    // }
    let res = await getAuthentication(
      fullname,
      email,
      password,
      phoneNumber
      //   localStorage.referrer
    );
    console.log(res);
    if (res.data.success === true) {
      console.log("okay Good Server");
    } else {
      setAlert(res.data.data.errors[0].msg, "danger");
    }
  };

  return (
    <div>
      <section className="signup_section">
        <div className="container">
          <div className="signup_area">
            <div className="signup_cont_head">
              <img
                src="/img/egoras-logo.svg"
                alt=""
                className="signup_title_img"
              />
            </div>
            <div className="signup_cont">
              <div className="signup_title">Create an Account</div>
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
                  <span className="input_title">
                    How did you hear about us?
                  </span>

                  <select className="cust_select">
                    <option value="0" className="opt">
                      Click to select:
                    </option>
                    <option value="1">Facebook</option>
                    <option value="2">Twitter</option>
                    <option value="3">Instagram</option>
                    <option value="4">Referred</option>
                    <option value="5">Online Blog</option>
                    <option value="6">Google search</option>
                    <option value="7">Others</option>
                  </select>
                  {/* ==[[[[[]]]]] */}

                  {/* <input type="" className="signup_input_field" /> */}
                </div>
                <button
                  type="submit"
                  className="sign_up_btn"
                  onClick={submitData}
                >
                  Create account
                </button>
              </div>
            </div>
            <span className="login_txt">
              <a href="/login" className="login_link">
                Already have an account? Login
              </a>
            </span>
          </div>
        </div>
        <img src="/img/piggy_bg.svg" alt="" className="piggy_bg" />
      </section>
    </div>
  );
};
export default connect(null, { getAuthentication, setAlert })(Signup);
