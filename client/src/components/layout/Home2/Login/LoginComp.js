import React, { useState, useCallback } from "react";
// import "../../../../css/signup.css";
import { connect } from "react-redux";
import "../../../../css/login.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { getLogin } from "../../../../actions/auth";
// import { getAuthentication } from "../../../../actions/auth";
import { setAlert } from "../../../../actions/alert";

const LoginComp = ({ getLogin, setAlert, isAuthenticated, parentCallback }) => {
  const [toke, setToke] = useState({ email: "", password: "" });
  const [userName, setUserName] = useState("");
  // const [loginSuccess,setLoginSuccess]= useState('successfully');
  // const [password,setPassword]= useState();

  const { email, password } = toke;

  const onChange2 = (e) => {
    setToke({ ...toke, [e.target.name]: e.target.value });
  };

  // const onChangeMe1 =(e)=>{
  // setEmail(e.target.value)

  // }

  //  const onChangeMe2 =(e)=>{
  // setPassword(e.target.value)

  //  }

  const sumit = async (e) => {
    // loginSuccess('true')
    
    let res3 = await getLogin(email, password);
    
    //console.log(res3);
    
    // if (res.data.email !== e.target.value)
    
    if (res3.data.success === true) {
      parentCallback(true);
      //console.log("okay Good Server");
    } else {
      setAlert(res3.data.errors[0].msg, "danger");
    }
  };
  // Redirect if logged in
  if (isAuthenticated) {
    // return <Redirect to="/dashboard" />;
    // return window.location.replace("/dashboard");
  }

  return (
    <div>
      <div style={{zIndex: '10000'}} className="signup_area">
        <div style={{width: '110%'}} className="signup_cont">
          <div className="signup_title">Login to user account</div>
          <span className="signup_para">
            Securely login to your Egoras Savings account.
          </span>
          <div className="signup_inputs_cont">
            <div className="signup_input_field1_cont">
              <span className="input_title">Email address</span>
              <input
                type="email"
                className="signup_input_field"
                name="email"
                onChange={onChange2}
                value={email}
              />
            </div>
            {/* <div className="signup_input_field1_cont">
                  <span className="input_title">Phone Number</span>
                  <input type="number" className="signup_input_field" />
                </div> */}
            <div className="signup_input_field1_cont">
              <span className="input_title">Password</span>
              <input
                type="password"
                className="signup_input_field"
                name="password"
                onChange={onChange2}
                value={password}
              />
            </div>
            {/* <div className="signup_input_field1_cont">
                  <span className="input_title">Repeat Password</span>
                  <input type="password" className="signup_input_field" />
                </div> */}
            <button type="submit" className="sign_up_btn" onClick={sumit}>
              login
            </button>
          </div>
        </div>
        <span className="login_txt">
          <a href="/super_admin/register_user" className="login_link">
            Don't have an account? Register
          </a>
        </span>
      </div>
    </div>
  );
};

LoginComp.propTypes = {
  // getLoginAuthentication: PropTypes.func.isRequired,
  // setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getLogin, setAlert })(LoginComp);
