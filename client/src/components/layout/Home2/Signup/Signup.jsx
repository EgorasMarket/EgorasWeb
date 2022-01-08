import React from "react";
import "../../../../css/signup.css";
const Signup = () => {
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
                  <input type="text" className="signup_input_field" />
                </div>
                <div className="signup_input_field1_cont">
                  <span className="input_title">Email address</span>
                  <input type="email" className="signup_input_field" />
                </div>
                <div className="signup_input_field1_cont">
                  <span className="input_title">Phone Number</span>
                  <input type="number" className="signup_input_field" />
                </div>
                <div className="signup_input_field1_cont">
                  <span className="input_title">Password</span>
                  <input type="password" className="signup_input_field" />
                </div>
                <div className="signup_input_field1_cont">
                  <span className="input_title">Repeat Password</span>
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
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                    <option value="5">Honda</option>
                    <option value="6">Jaguar</option>
                    <option value="7">Land Rover</option>
                    <option value="8">Mercedes</option>
                    <option value="9">Mini</option>
                    <option value="10">Nissan</option>
                    <option value="11">Toyota</option>
                    <option value="12">Volvo</option>
                  </select>
                  {/* ==[[[[[]]]]] */}

                  {/* <input type="" className="signup_input_field" /> */}
                </div>
                <button type="submit" className="sign_up_btn">
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

export default Signup;
