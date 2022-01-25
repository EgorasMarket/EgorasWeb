import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

import NumberFormat from "react-number-format";
import "../DashboardStyles/dashboardCheckout.css";
const Dashboard_Checkout_Page = (props) => {
  const [checkBal, setCheckBal] = useState("200,000.00");
  const [modal, setModal] = useState(false);
  function limit(val, max) {
    if (val.length === 1 && val[0] > max[0]) {
      val = "0" + val;
    }

    if (val.length === 2) {
      if (Number(val) === 0) {
        val = "01";

        //this can happen when user paste number
      } else if (val > max) {
        val = max;
      }
    }

    return val;
  }

  function cardExpiry(val) {
    let month = limit(val.substring(0, 2), "12");
    let date = limit(val.substring(2, 4), "31");

    return month + (date.length ? "/" + date : "");
  }

  const OpenModal = () => {
    setModal(true);
  };

  const CloseModal = () => {
    setModal(false);
  };

  return (
    // <div className="checkout_main">
    <section className="checkout_page_section">
      <div className="container">
        <div className="checkout_cont">
          <div className="checkout_cont_header">
            <div className="checkout_header_img">
              <img
                src="/img/egoras-logo.svg"
                alt=""
                className="egoras_logo_checkout"
              />
            </div>
            <div className="checkout_header_btn">
              <CloseIcon
                onClick={props.click}
                className="close_checkout_icon"
              />
            </div>
          </div>
          <div className="checkout_total_balance">
            Total Balance: <span className="balance_checkout">#{checkBal}</span>
          </div>
          <div className="card_details_title">ENTER CARD DETAILS</div>
          <div className="card_details_inputs">
            {/* -------------==== */}
            <div className="card_input_cont">
              <div className="card_input_heading">Card Number</div>
              <NumberFormat
                format="#### #### #### ####"
                className="card_details_input1"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            {/* ============ */}
            <div className="card_input_contss">
              <div className="card_input_cont">
                <div className="card_input_heading">Date</div>
                <NumberFormat
                  format={cardExpiry}
                  className="card_details_input1"
                  placeholder="MM/YY"
                />
              </div>
              <div className="card_input_cont">
                <div className="card_input_heading">CVV</div>
                <NumberFormat
                  // format="#### #### #### ####"
                  className="card_details_input1"
                  placeholder="000"
                />
              </div>
            </div>
            {/* ========= */}
            {/* ========= */}
            {/* ========= */}
            {/* ========= */}
            <div className="card_details_titleww"> 100% Safe and Secure</div>
            {/* ====== */}
            {/* ====== */}
            {/* ====== */}
            {/* ====== */}
            <button className="pay_now_btn">Pay Now</button>
          </div>
        </div>
      </div>
    </section>
    // </div>
  );
};

export default Dashboard_Checkout_Page;
