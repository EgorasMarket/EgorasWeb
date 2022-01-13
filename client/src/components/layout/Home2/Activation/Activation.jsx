import React, { useEffect, useState } from "react";

import "../../../../css/signup.css";

const Activation = () => {
  const [email, setEmail] = useState("samuelify225@gmail.com ");
  return (
    <div>
      <section className="signup_section">
        <div className="container">
          <div className="activation_area">
            <div className="activation_div">
              <img src="/img/activate.svg" alt="" className="activate_img" />
              <h1>Success</h1>
              <div className="">
                An activation email has been sent to s{email}
                with instructions to activate your account. * If the email
                doesn’t show up soon, check your spam folder or make sure you
                enter the email you used for registration.
              </div>
              <button
                // type="submit"
                className="loginButton activate_btn"
              >
                <a href="/login" className="login activate_link">
                  Login
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// export default Activation;

export default Activation;
