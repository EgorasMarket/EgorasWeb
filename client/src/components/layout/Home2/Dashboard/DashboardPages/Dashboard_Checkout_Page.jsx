import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { connect } from "react-redux";
import axios from "axios";

import { proceedToCheckout } from "../../../../../actions/transactions";
import NumberFormat from "react-number-format";
import "../DashboardStyles/dashboardCheckout.css";
const Dashboard_Checkout_Page = ({proceedToCheckout}) => {
  const [checkBal, setCheckBal] = useState("200,000.00");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isOtp, setIsOtp] = useState(false);
  const [cardInfoOne, setCardInfoOne] = useState({
    card_number: '',
    cardExDate: '',
    cvv: '',
  });

  const { card_number, cardExDate, cvv } = cardInfoOne;
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
  const show_pin_modal = async () => {
    // setIsSuccessful(true);
    const getExDate = cardExDate.split('/');
    let expiry_month = getExDate[0];
    let expiry_year = getExDate[1];
    console.log(card_number.replace(/ /g, ''), expiry_month, expiry_year, cvv);

    let res3 = await proceedToCheckout(card_number.replace(/ /g, ''), expiry_month, expiry_year, cvv);
    console.log(res3);
  };
  const show_otp_modal = () => {
    setIsOtp(true);
    setIsSuccessful(!isSuccessful);
  };

  const onChange1 = (e) => {
    setCardInfoOne({ ...cardInfoOne, [e.target.name]: e.target.value });

  };
  return (
    // <div className="checkout_main">
    <section className="checkout_page_section">
      <div className="container">
        {isOtp == false ? (
          isSuccessful == false ? (
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
                  {/* <CloseIcon
                    onClick={props.click}
                    className="close_checkout_icon"
                  /> */}
                </div>
              </div>
              <div className="checkout_total_balance">
                Total Balance:{" "}
                <span className="balance_checkout">#{checkBal}</span>
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
                    name="card_number"
                    value={card_number}
                    onChange={(e) => onChange1(e)}
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
                      name="cardExDate"
                      value={cardExDate}
                      onChange={(e) => onChange1(e)}
                    />
                  </div>
                  <div className="card_input_cont">
                    <div className="card_input_heading">CVV</div>
                    <NumberFormat
                      format="###"
                      className="card_details_input1"
                      placeholder="000"
                      name="cvv"
                      value={cvv}
                      onChange={(e) => onChange1(e)}
                    />
                  </div>
                </div>
                {/* ========= */}
                {/* ========= */}
                {/* ========= */}
                {/* ========= */}
                <div className="card_details_titleww">
                  {" "}
                  100% Safe and Secure
                </div>
                {/* ====== */}
                {/* ====== */}
                {/* ====== */}
                {/* ====== */}
                <button className="pay_now_btn" onClick={show_pin_modal}>
                  Pay Now
                </button>
              </div>
            </div>
          ) : (
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
                  {/* <CloseIcon
                    onClick={props.click}
                    className="close_checkout_icon"
                  /> */}
                </div>
              </div>
              <div className="card_details_title">
                ENTER YOUR CARD PIN TO CONTINUE
              </div>
              <div className="card_details_inputs">
                {/* -------------==== */}
                <div className="card_input_cont">
                  <div className="card_input_heading">Card Pin</div>
                  <NumberFormat
                    type="password"
                    //   format="####"
                    className="card_details_input1"
                    placeholder="0000"
                  />
                  {/* <input
                  type="password"
                //   format="####"
                  className="card_details_input1"
                  placeholder="0000"
                /> */}
                </div>
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ========= */}
                {/* ========= */}
                {/* ========= */}
                {/* ========= */}
                {/* ====== */}
                {/* ====== */}
                {/* ====== */}
                {/* ====== */}
                <button className="pay_now_btn" onClick={show_otp_modal}>
                  Continue
                </button>
              </div>
            </div>
          )
        ) : (
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
                {/* <CloseIcon
                  onClick={props.click}
                  className="close_checkout_icon"
                /> */}
              </div>
            </div>
            <div className="card_details_title">ENTER OTP SENT TO YOU</div>
            <div className="card_details_inputs">
              {/* -------------==== */}
              <div className="card_input_cont">
                <div className="card_input_heading">OTP Code</div>
                <input
                  type="password"
                  maxLength={4}
                  minLength={1}
                  //   format="####"
                  className="card_details_input1"
                  placeholder="0000"
                />
              </div>
              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              {/* ====== */}
              {/* ====== */}
              {/* ====== */}
              {/* ====== */}
              <button className="pay_now_btn">Submit</button>
            </div>
          </div>
        )}

        {/* ================================ */}
        {/* ================================ */}
        {/* ================================ */}
        {/* ================================ */}
        {/* ================================ */}
        {/* ================================ */}
        {/* ================================ */}
      </div>
    </section>
    // </div>
  );
};

// export default Dashboard_Checkout_Page;



export default connect(null, { proceedToCheckout })(Dashboard_Checkout_Page);