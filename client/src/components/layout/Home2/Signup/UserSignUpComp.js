import React, { useState, useEffect, useCallback } from "react";
// import "../../../../css/signup.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import "../../../../css/login.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import {CustomAlert} from "./alert";
import { CustomAlert } from "../Login/alert";
import DatePicker from "react-date-picker";

import { getLogin, getAuthentication } from "../../../../actions/auth";
// import { getAuthentication } from "../../../../actions/auth";
// import { setAlert } from "../../../../actions/alert";

const UserSignUpComp = ({
  getLogin,
  getAuthentication,
  isAuthenticated,
  parentCallback,
}) => {
  // New Changes
  const [userAuth, setUserAuth] = useState({
    // fullname: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    BVN: "",
    phoneNumber: "",
    confirmPassword: "",
    InfoReason: "",
  });

  const [dateOfBirth, setDateOfBirth] = useState("");

  const [disable, setDisable] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState("");
  const [customAlert, setCustomAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [strongPass, setStrongPass] = useState(false);
  const [mismatchPass, setMismatchPass] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const {
    // fullname,
    firstname,
    lastname,
    email,
    password,
    BVN,
    phoneNumber,
    confirmPassword,
    InfoReason,
  } = userAuth;

  let birthDate = dateOfBirth ? dateOfBirth.toLocaleDateString() : "";

  useEffect(() => {
    // if (fullname === "") {
    //   setDisable(true);
    // }
    if (firstname === "") {
      setDisable(true);
    }
    if (lastname === "") {
      setDisable(true);
    }
    if (email === "") {
      setDisable(true);
    } else if (password === "") {
      setDisable(true);
    } else if (phoneNumber === "") {
      setDisable(true);
    } else if (confirmPassword === "") {
      setDisable(true);
    } else if (InfoReason === "") {
      setDisable(true);
    } else if (isLoading == true) {
      setDisable(true);
    } else if (isLoading == false) {
      setDisable(false);
    } else {
      setDisable(false);
    }
  });
  const onChange = (e) => {
    setUserAuth({ ...userAuth, [e.target.name]: e.target.value });

    const { name, value } = e.target;

    switch (name) {
      case "password":
        if (e.target.value.length <= 7) {
          setStrongPass(true);
          //console.log("password is not 8");
        } else if (password.length >= 7) {
          setStrongPass(false);
          //console.log("password is 8");
        }
        break;
      default:
        break;
    }
  };
  const onChange2 = (e) => {
    setUserAuth({ ...userAuth, [e.target.name]: e.target.value });

    const { name, value } = e.target;

    switch (name) {
      case "confirmPassword":
        if (e.target.value !== password) {
          setMismatchPass(true);
          //console.log("password not match");
        } else if (e.target.value === password) {
          setMismatchPass(false);
          //console.log("password match");
        }
        break;
      default:
        break;
    }
  };
  const setPasswordVisibilty = () => {
    setVisibility(true);
    // setPassImg("hide_pass");
  };
  const closetPasswordVisibilty = () => {
    setVisibility(false);
    // setPassImg("show_pass");
  };
  const setPasswordVisibilty2 = () => {
    setVisibility2(true);
    // setPassImg2("hide_pass2");
  };
  const closetPasswordVisibilty2 = () => {
    setVisibility2(false);

    // setPassImg2("show_pass2");
  };

  // useEffect(() => {
  //   setIsSuccessful(false);
  // });
  const submitData = async (e) => {
    console.log(birthDate, email, firstname, lastname, BVN, "sfdbhjdfbkjdbjk");
    if (isLoading == true) {
      //
      setDisable(true);
    } else if (isLoading == false) {
      setDisable(false);
    }
    setIsLoading(true);
    setDisable(true);
    let res = await getAuthentication(
      // fullname,
      firstname.trim(),
      lastname.trim(),
      email,
      birthDate,
      password,
      BVN,
      phoneNumber,
      InfoReason
      //   localStorage.referrer
    );
    //console.log(res);
    if (res.data.success === true) {
      setIsSuccessful(true);
      //console.log("okay Good Server");
      setIsLoading(false);
    } else {
      setAlert(res.data.data.errors[0].msg, "danger");
      setIsLoading(false);
      setDisable(false);
      setCustomAlert(true);
      setAlertType("danger");
    }

    //console.log(res.data.data.errors[0].msg);
  };

  //   const timer = setTimeout(() => {
  //     setAlert2("");
  //   }, 5000);

  return (
    <div>
      <div style={{ zIndex: "10000" }} className="signup_area">
        <div
          style={{ width: "100vw", height: "100vh", borderRadius: "unset" }}
          className="signup_cont"
        >
          <div className="mt-5">
            <div className="signup_title">Create an Account</div>
            <span className="signup_para">Welcome to Egoras Savings.</span>
            <div className="signup_inputs_cont">
              <div
                className="signup_input_field1_cont"
                style={{ flexDirection: "row" }}
              >
                <div className="text-left">
                  <span className="input_title">First Name</span>
                  <input
                    type="text"
                    name="firstname"
                    className="signup_input_field"
                    value={firstname}
                    onChange={onChange}
                  />
                </div>
                <div className="text-left">
                  <span className="input_title">Last Name</span>
                  <input
                    type="text"
                    name="lastname"
                    className="signup_input_field"
                    value={lastname}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="signup_input_field1_cont">
                <span className="input_title">Email address</span>
                <input
                  type="email"
                  className="signup_input_field"
                  value={email}
                  name="email"
                  onChange={onChange}
                  placeHolder="@gmail.com"
                />
                <div className="weak_pass_div text-muted">* Optional</div>
              </div>

              <div
                className="signup_input_field1_cont"
                style={{ flexDirection: "row" }}
              >
                <div className="text-left">
                  <span className="input_title">Phone Number</span>
                  <input
                    type="number"
                    className="signup_input_field"
                    value={phoneNumber}
                    name="phoneNumber"
                    onChange={onChange}
                  />
                </div>
                <div
                  className="text-left"
                  style={{ width: "-webkit-fill-available" }}
                >
                  <span className="input_title">Date Of Birth</span>
                  <DatePicker
                    onChange={setDateOfBirth}
                    value={dateOfBirth}
                    format="yyyy-MM-dd"
                  />
                  <div className="weak_pass_div text-muted">* Optional</div>
                </div>
              </div>
              <div className="signup_input_field1_cont">
                <span className="input_title">
                  Bank Verification Number (BVN)
                </span>
                <input
                  type="number"
                  className="signup_input_field"
                  value={BVN}
                  name="BVN"
                  onChange={onChange}
                  placeHolder="***********"
                />
                <div className="weak_pass_div text-muted">* Optional</div>
              </div>

              {/* <div className="signup_input_field1_cont">
                    <span className="input_title">
                      Bank Verification Number (BVN)
                    </span>
                    <input
                      type="number"
                      className="signup_input_field"
                      value={BVN}
                      name="BVN"
                      onChange={onChange}
                    />
                  </div> */}
              <div className="signup_input_field1_cont">
                <span className="input_title">Password</span>
                <div className="passwrd_input_div">
                  <input
                    type={visibility ? "text" : "password"}
                    className="signup_input_field"
                    value={password}
                    name="password"
                    onChange={onChange}
                    placeHolder="****"
                    // onInput={onChangeMisMatch}
                  />
                  {visibility == false ? (
                    <img
                      src="/img/close-pass.svg"
                      alt=""
                      className="close_pass_img"
                      onClick={setPasswordVisibilty}
                    />
                  ) : (
                    <img
                      src="/img/show-icon.svg"
                      alt=""
                      className="open_pass_img"
                      onClick={closetPasswordVisibilty}
                    />
                  )}
                </div>
                {strongPass == false ? null : (
                  <div className="weak_pass_div">Password is weak</div>
                )}
              </div>
              <div className="signup_input_field1_cont">
                <span className="input_title">Repeat Password</span>
                <div className="passwrd_input_div">
                  <input
                    type={visibility2 ? "text" : "password"}
                    className="signup_input_field"
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={onChange2}
                    placeHolder="****"
                  />
                  {visibility2 == false ? (
                    <img
                      src="/img/close-pass.svg"
                      alt=""
                      className="close_pass_img"
                      onClick={setPasswordVisibilty2}
                    />
                  ) : (
                    <img
                      src="/img/show-icon.svg"
                      alt=""
                      className="open_pass_img"
                      onClick={closetPasswordVisibilty2}
                    />
                  )}
                </div>
                {mismatchPass == false ? null : (
                  <div className="weak_pass_div">Password did not match</div>
                )}
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
              <button
                type="submit"
                className="sign_up_btn"
                onClick={submitData}
                disabled={disable}
              >
                {isLoading ? (
                  <span>
                    Creating account{" "}
                    <FontAwesomeIcon className="ml-2" icon={faSpinner} spin />
                  </span>
                ) : (
                  <span>Create account</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* {alert2 == "" ? null : <CustomAlert alert={alert2} alertType={alertType} onChange={timer} />} */}
    </div>
  );
};

UserSignUpComp.propTypes = {
  // getLoginAuthentication: PropTypes.func.isRequired,
  // setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getAuthentication })(UserSignUpComp);
