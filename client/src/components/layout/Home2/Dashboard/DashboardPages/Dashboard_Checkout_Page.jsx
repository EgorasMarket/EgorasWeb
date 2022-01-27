import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { connect } from "react-redux";
import axios from "axios";

import { proceedToCheckout , sendPin } from "../../../../../actions/transactions";
import NumberFormat from "react-number-format";
import "../DashboardStyles/dashboardCheckout.css";
const Dashboard_Checkout_Page = ({proceedToCheckout, sendPin, auth, cAmount}) => {
  const [checkBal, setCheckBal] = useState("200,000.00");
  const [isSuccessful, setIsSuccessful] = useState(true);
  const [isOtp, setIsOtp] = useState(false);
  const [pin, setPin] = useState('');
  const [payload1, setPayload1] = useState(
    {
      "card_number":"5399838383838381",
      "cvv":"470",
      "expiry_month":"10",
      "expiry_year":"31",
      "currency":"NGN",
      "amount":2000,
      "redirect_url":"https://www.google.com",
      "fullname":"Ebri Goodness",
      "email":"7huyhbhb@gmail.com",
      "phone_number":"89888888888",
      "enckey":"FLWSECK_TEST68fe8fdbc2e1",
      "tx_ref":"IJPHM6ZQIKCH5X7NUSLF"
    }
  );
  const [payload2, setPayload2] = useState([]);
  const [cardInfoOne, setCardInfoOne] = useState({
    card_numberVar: '',
    cardExDate: '',
    cvv: '',
  });

  console.log(cAmount);

  const { card_numberVar, cardExDate, cvv } = cardInfoOne;
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


  const [userInfo, setUserInfo] = useState({
    Userfullname: "",
    Userfirstname: "",
    Userlastname: "",
    Useremail: "",
    UserphoneNumber: "",
    UseruserImage: "",
    Userrelationship: "",
    Usergender: "",
    Userbvn: "",
    UserdateOfBirth: "",
  });

  const { Userfullname, Userfirstname, Userlastname, Useremail, Usergender, Userrelationship, UseruserImage, UserphoneNumber, Userbvn, UserdateOfBirth } =
  userInfo;


  useEffect(() => {

    // setCartNum(cart.length)
    // fetchDepositLinks();
    console.log(auth);
    if (auth.user !== null) {
      // let dataa = 'stackabuse.com';
      // console.log( new Buffer(dataa));
      var todecoded = auth.user;
      var todecodedn = todecoded.user.userImage;
      
      // console.log('====================================');
      console.log(todecodedn);
      // console.log('====================================');
      
      
      const getName = todecoded.user.fullname
      const splitName = getName.split(' ');
      
      setUserInfo({
        Userfullname: todecoded.user.fullname,
        Userfirstname: splitName[0],
        Userlastname: splitName[1],
        Useremail: todecoded.user.email,
        UseruserImage: todecoded.user.userImage,
        UserphoneNumber: todecoded.user.phoneNumber,
        Userrelationship: todecoded.user.relationship,
        Usergender: todecoded.user.gender,
        Userbvn:todecoded.user.BVN,
        UserdateOfBirth:todecoded.user.dateOfBirth,
      })
  
      // if (todecoded.user.userImage !== null) {
      //   setImage(api_url2+'/'+todecoded.user.userImage)
      // } else {
      //   setImage('../../img/profile_img.jpeg')
      // }
      
    }
  }, [auth]);

  const show_pin_modal = async () => {
    const getExDate = cardExDate.split('/');
    let expiry_month = getExDate[0];
    let expiry_year = getExDate[1];
    // console.log(card_numberVar.replace(/ /g, ''), expiry_month, expiry_year, cvv, Userfullname, Useremail, UserphoneNumber, cAmount);
    let card_number = card_numberVar.replace(/ /g, '')
    
    let res3 = await proceedToCheckout(card_number, expiry_month, expiry_year, cvv, Userfullname, Useremail, UserphoneNumber, 2000);
    console.log(res3);
    
    if (res3.success === true) {
      setIsSuccessful(true);
      console.log(res3.data.stringify);
      setPayload1(res3.data.stringify)
      
    }
  };

  const show_otp_modal = async () => {
    // setIsOtp(true);
    // setIsSuccessful(!isSuccessful);

    console.log(payload1, pin);
    let sendP1 = await sendPin(payload1, pin);
    console.log(sendP1);

  };

  const onChange1 = (e) => {
    setCardInfoOne({ ...cardInfoOne, [e.target.name]: e.target.value });

  };

  const onChangePin = (e) => {
    setPin(e.target.value)
  }
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
                <span className="balance_checkout">#{cAmount}</span>
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
                    name="card_numberVar"
                    value={card_numberVar}
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
                    name="pin"
                    value={pin}
                    onChange={onChangePin}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  // isAuthenticated: state.auth.isAuthenticated,
  // cart: state.shop.cart
});

export default connect(mapStateToProps, { proceedToCheckout, sendPin })(Dashboard_Checkout_Page);