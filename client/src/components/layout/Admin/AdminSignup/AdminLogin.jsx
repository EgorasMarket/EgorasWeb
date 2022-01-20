import React from "react";

const AdminLogin = () => {
  return (
    <div>
      <section className="signup_section">
        <div className="container">
          <div className="signup_area">
            <div className="signup_cont">
              <div className="signup_title">Login to your account</div>
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
                    // onChange={onChange2}
                    // value={email}
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
                    // onChange={onChange2}
                    // value={password}
                  />
                </div>
                {/* <div className="signup_input_field1_cont">
                  <span className="input_title">Repeat Password</span>
                  <input type="password" className="signup_input_field" />
                </div> */}
                <button
                  type="submit"
                  className="sign_up_btn"
                  //   onClick={sumit}
                >
                  login
                </button>
              </div>
            </div>
            <span className="login_txt">
              <a href="/signup" className="login_link">
                Don't have an account? Register
              </a>
            </span>
          </div>
        </div>
        <img src="/img/piggy_bg.svg" alt="" className="piggy_bg" />
      </section>
    </div>
  );
};

export default AdminLogin;
