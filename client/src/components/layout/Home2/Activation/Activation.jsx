import React, { useEffect, useState } from "react";

import "../../../../css/signup.css";

const Activation = () => {
  return (
    <div>
      <section className="activation_section">
        <div className="container">
          <div className="activation_area">
            <div className="activation_div">
              <img src="/img/activate.svg" alt="" className="activate_img" />
              <h1>Success</h1>
              <div className="">Your account has been verified</div>
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
