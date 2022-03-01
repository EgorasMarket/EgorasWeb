import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import verify from "../../../../flutterwave/API/Verify";
import CloseIcon from "@mui/icons-material/Close";
// import Wallet1 from "../../Wallet/Wallet1";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
  API_URL2,
} from "../../../../actions/types";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import FlutterButton from "../../../../flutterwave/FlutterButton";
import Dashboard_Checkout_Page from "../Dashboard/DashboardPages/Dashboard_Checkout_Page";
import LoadingIcons from "react-loading-icons";
import PaymentPlan from "../../../../flutterwave/API/PaymentPlan";
import verifyTransaction from "../../../../flutterwave/API/Verify";
import { createOrder } from "../../../../actions/shop";
import { connect } from "react-redux";
import initPayment from "../../../../flutterwave/initPayment";
import initializePayment from "../../../../flutterwave/API/initializePayment";
import  { Redirect } from 'react-router-dom'

const CheckoutModalComponent = ({ payload, closeCheckoutOptions, auth }) => {
  //destructure the payload and return values
  const {
    amount,
    percentage,
    product_brand,
    product_category_code,
    product_details,
    product_duration,
    product_id,
    product_image,
    product_name,
    product_specifications,
    product_type,
    initial_deposit,
    paymentPerday,
    payment_type,
    days_left,
    no_of_days,
    no_of_days_paid,
    startDate,
    endDate,
  } = payload;

  const [user_id, setUserId] = useState("");
  const [isloading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [walletBalance, setWalletBalance] = useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [ProcessingDiv, setProcessingDiv] = useState(false);
  const [name, setName] = useState("");
  const [option, setOption] = useState(-1);
  const [customer_data, setCustomerData] = useState({});
  const [tokenBal, setTokenBal] = useState("0.000");
  const [assetVal, setAssetVal] = useState("0.000");
  const [tokenSign, setTokenSign] = useState();
  const [hardNumb, setHardNum] = useState(300);
  const [errorDiv, setErrorDiv] = useState(false);
  // //console.log(phone_no, name, option);
  // //console.log(phone_no, name, option)
  let deliveryFee = 0; 

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [addressName, setAddressName] = useState("");

  useEffect(async () => {
    await axios
      .get(api_url2 + "/v1/user/address/info", null, config)
      .then((response) => {
        //console.log(response , "wewter kings")
        //console.log(response.data.cusAddress. address,"market")

        setAddressName(response.data.cusAddress.address);
        //  //console.log(addressName,"Bk is good for development")
      });
  }, []);
  useEffect(() => {
    var Authorized = auth.user;
    var userId = Authorized.user.id;
    axios
      .get(api_url2 + "/v1/wallet/get/wallet/info/" + userId, null, config)
      .then((data) => {
        console.log(data.data.data.balance);
        setTokenBal(data.data.data.balance);
        setAssetVal(data.data.data.balance * 1);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [auth]);
  useEffect(() => {
    // setIsLoading2(true);
    axios
      .get(api_url2 + "/v1/wallet/get/all/tokens", null, config)
      .then((data) => {
        console.log(data.data.data, "powerful");
        setTokenSign(data.data.data[0].tokenSymbol);
      })
      .catch((err) => {
        console.log(err.response); // "oh, no!"
      });
  }, []);
  useEffect(() => {
    if (auth.user !== null) {
      //console.log(auth.user, "user  exist ");
      setEmail(auth.user.user.email);
      setPhoneNo(auth.user.user.phoneNumber);
      setName(auth.user.user.fullname);
      const { fullname, email, phoneNumber, id } = auth.user.user;
      setCustomerData({
        name: fullname,
        email,
        phonenumber: phoneNumber,
        customer_id: id,
      });
    }
  }, []);

  const flutterConfig = {
    public_key: "FLWPUBK-bb7997b5dc41c89e90ee4807684bd05d-X",
    tx_ref: "EGC-" + Date.now(),
    amount: 1,

    currency: "NGN",
    // redirect_url: "https://a3dc-197-210-85-62.ngrok.io/v1/webhooks/all",
    payment_options: "card",
    // payment_plan:63558,
    customer: {
      phonenumber: phone_no,
      email: email,
      name: name,
    },
    meta: {
      customer_id: customer_data.customer_id,
      eventType: "1",
    },
    customizations: {
      title: "Payment from Egoras savings",
      description: "Payment for items in cart",
      logo: "https://egoras.com/img/egoras-logo.svg",
    },
  };
  const handleFlutterPayment = useFlutterwave(flutterConfig);
  const openProcessingDiv = () => {
    setProcessingDiv(true);
  };
  const selectOption = async (value) => {
    // switch(value ){
    //   case 0:
    //     // const call = await initializePayment(1, customer_data)
    //     // //console.log(call)

    //     // handleFlutterPayment({callback: ()=> {
    //     //   alert('here')
    //     // }})
    // }
    switch (value) {
      case 0:
        // alert('payment set as card', product_id)
        handleFlutterPayment({
          callback: async (response) => {
            //console.log(response);
            try {
              if (!response.transaction_id) {
                alert(
                  "We couldn't return any information from this payment please try again."
                );
              }
              const verification = await verify(
                response.transaction_id,
                product_id,
                startDate,
                endDate, 
                days_left
              );
              closePaymentModal();
            } catch (error) {
              //console.log(error.response);
            }
          },
          onClose: (response) => {
            //console.log(response, "response from onclose ");
          },
        });

        break;

      case 1:
      
        if (tokenBal >= initial_deposit) {
          setProcessingDiv(true);
          //
          const orderBody = JSON.stringify({
            product_id,
            initial_pay:initial_deposit,
            startDate, 
            endDate,
            days_left, 
            
        });

        console.log(orderBody)
        const res = await axios.post(API_URL2 + "/v1/order/add/order/crypto", orderBody, config).then(response =>{
            console.log(response, " response after order endpoint is called")
            setProcessingDiv(false)
            alert("Your order have been completed successfully, You will redirected to the market place")
            return <Redirect to="/dashboard" />
        }).catch(err => {
            console.log(err.response)
            setProcessingDiv(false)
            setErrorDiv(true)
        });
        //

        } else {
          setProcessingDiv(false);
          setErrorDiv(true);
        }
        break;
    }
  };

  return (
    <>
      <div className="detailsModal" style={{ position: "relative" }}>
        <div className="detailsModalSection1">
          <div className="bacKbutton" onClick={closeCheckoutOptions}>
            Previous
            <ArrowForwardIosIcon className="arrow_back" />
          </div>
          <div className="detailsModalSection1_area1">
            <div className="delivery_title1">Delivery / Pickup Options</div>
            <div className="delivery_cards_section">
              <div className="delivery_card1">
                <div className="delivery_card_title">
                  Deliver to me{" "}
                  <button className="button_change_delivery_address">
                    Change Address
                  </button>
                </div>
                <div className="delivery_card_body">
                  <div className="delivery_card_body_cont1">
                    {customer_data.name}
                  </div>
                  <div className="delivery_card_body_cont1">{addressName}</div>
                  <div className="delivery_card_body_cont1">
                    {customer_data.phonenumber}
                  </div>
                </div>
              </div>
              {/* ============= */}
              {/* ============= */}
              {/* ============= */}
              {/* ============= */}
              <div className="delivery_card2">
                <div className="delivery_card_title">
                  Pickup from our agents
                  <button className="button_change_delivery_address pickup_btn">
                    Select Pickup Location
                  </button>
                </div>
                <div className="delivery_card_body">
                  <div className="delivery_card_body_cont1">
                    Select a pickup location in your area from our 32 locations
                    nationwide.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="detailsModalSection1_area2">
            <div className="detailsModalSection1-area2_title">Review Order</div>
            <div className="review_order_div">Delivery 1 of 1</div>
            <div>
              <div class="save_prod_deta">
                <table className="save_item_table">
                  <thead className="assets-category-titles">
                    <tr className="assets">
                      <th className="assets-category-titles-heading1">Item</th>
                      <th className="assets-category-titles-heading1">
                        Item Details
                      </th>
                      <th className="assets-category-titles-heading1 quant">
                        Amount daily
                      </th>
                      {/* <th className="assets-category-titles-heading1 quant">
                              Unit Price
                            </th> */}
                      <th className="assets-category-titles-heading1_last">
                        Sub Total
                      </th>
                    </tr>
                  </thead>

                  <tbody
                    className="save_items_cat popular-categories"
                    id="popular-categories"
                  >
                    {" "}
                    <tr className="assets-category-row">
                      <td className="save_item_data">
                        <div className="assets-data height_data">
                          <img
                            src={api_url2 + "/" + product_image}
                            alt=""
                            className="save_item_img_img"
                          />
                        </div>
                      </td>
                      {/* ======== */}
                      {/* ======== */}
                      {/* ======== */}
                      {/* ======== */}
                      <td className="save_item_data1">
                        <div className="save_items_details">
                          <div className="save_items_details1">
                            {product_name}
                          </div>
                          <div className="save_item_days_left">
                            {days_left} days left
                            {/* <div className="days_left_percentage_cont">
                              <span
                                className="days_left_percentage"
                                // style={{
                                //   width:
                                //     100 % -((amount * 100) / unitCount),
                                // }}
                              ></span>
                            </div> */}
                          </div>
                          <div className="save_total_locked_amount">
                            <span className="items_left_amount">
                              Total Amount Locked on Item
                            </span>
                            ₦{initial_deposit}
                          </div>
                        </div>
                      </td>
                      <td className="save_item_data1b">
                        <div className="assets-data-name_last">
                          ₦{paymentPerday}
                        </div>
                      </td>
                      {/* <td className="save_item_data1b">
                                <div className="assets-data-name center_name">
                                  ₦{amount}
                                </div>
                              </td> */}
                      <td className="save_item_data1b">
                        <div className="assets-data-name_last">₦{initial_deposit}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="detailsModalSection2">
          <div className="details_modal_divv">
            {/* ======================= */}

            <div className="cart_area2_heading">Payment Options</div>
            {/* ===================== */}
            <div className="cart_area2_select">
              <div className="wit_card">
                Pay via card{" "}
                <input
                  type="radio"
                  name="payment"
                  id=""
                  className="checkBox"
                  style={{ display: "block", cursor: "pointer" }}
                  onClick={() => {
                    setOption(0);
                    setWalletBalance(false);
                  }}
                />
              </div>
            </div>
            {/* ===================== */}
            <div className="cart_area2_select">
              <div className="wit_card">
                Pay via wallet{" "}
                <input
                  type="radio"
                  name="payment"
                  id=""
                  className="checkBox"
                  style={{ display: "block", cursor: "pointer" }}
                  onClick={() => {
                    setOption(1);
                    setWalletBalance(true);
                  }}
                />
              </div>
              {walletBalance == true ? (
                <div className="wallet_bal_acct">
                  Wallet Bal: {parseInt(tokenBal).toFixed(3)} {tokenSign}
                  {/* Wallet Bal: {hardNumb} {tokenSign} */}
                </div>
              ) : null}
            </div>

            {/* <FlutterButton 
             payment_plan={showPayment}
             user_id ={user_id}
             amount={1}
             payload = {userPayload}
             payment_title={"Payment From Egoras savings "}
            //  payment_options={"ussd"}
             customer={
                 {
               email:"gibbywise@gmail.com", 
               phonenumber:"07026782437", 
               name:"Chidoro  Ndubueze"}
             } /> */}

            {/* <div className="cart_area2_select border_down">
              <div className="wit_card">
                Pay via wallet{" "}
                <input type="checkbox" name="" id="" classNam="checkBox" />
              </div>
            </div> */}
            {/* ========= */}
            {/* ========= */}
            {/* ========= */}

            <div className="cart_area2_notes">
              . No minimum or maximum order.
              <br />
              . Make sure your card is still valid.
              <br />. Ensure sufficient balance to cover this transaction.
            </div>
            {/* ========== */}
            {/* ========== */}
            {/* ========== */}
            {/* ========== */}
            <div className="sub_total_div">
              Sub Total: <span className="sub_total_div_span">₦{initial_deposit}</span>
            </div>
            {/* ========== */}
            {/* ========== */}
            {/* ========== */}
            {/* ========== */}
            <div className="sub_total_div">
              Delivery Fee: <span className="sub_total_div_span">₦0</span>
            </div>
            {/* ========== */}
            {/* ========== */}
            <div className="secure_transac_text">
              {" "}
              Transactions are 100% Safe and Secure
            </div>
            {/* ========== */}
            {/* ========== */}
            <div className="transac_secure_div">
              Total <span className="sub_total_div_span">₦{initial_deposit + deliveryFee}</span>
            </div>
            {/* ========== */}
            {/* ========== */}

            <button
              className="checkout_btn1a"
              onClick={() => {
                // openPayment();
                selectOption(option);
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      {ProcessingDiv == false ? 
       null
      : (
        <div className="processing_transac_div">
          <LoadingIcons.Bars fill="#229e54" />
          Processing Transaction...
        </div>
      )}
      {errorDiv == false ? null : (
        <div className="processing_transac_div insufficient">
          <div className="insufficient_div">
            <CloseIcon
              className="closeDivIcon"
              onClick={() => setErrorDiv(false)}
            />
            <img src="/img/empty-wallet.svg" alt="" className="empty_wallet" />
            Insufficient Balance
            <span className="fund_wall">
              Please fund Your wallet to complete payment.
            </span>
            <a href="/dashboard/wallet">
              <button className="fund_wallet_btn">Fund Wallet</button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  createOrder,
})(CheckoutModalComponent);