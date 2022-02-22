import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import verify from '../../../../flutterwave/API/Verify'

import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import FlutterButton from "../../../../flutterwave/FlutterButton";
import Dashboard_Checkout_Page from "../Dashboard/DashboardPages/Dashboard_Checkout_Page";
import PaymentPlan from '../../../../flutterwave/API/PaymentPlan'
import verifyTransaction from '../../../../flutterwave/API/Verify'
import {createOrder} from '../../../../actions/shop'
import { connect } from "react-redux";
import initPayment from '../../../../flutterwave/initPayment'

const CheckoutModalComponent = ({
  startDate,
  endDate,
  product_id,
  customer_id,
  installation_days,
  closeCheckoutOptions,
  previousBtn,
  CheckBtn,
  userPayload,
  createOrder, 
  auth
}) => {
  //use states
  const [user_id , setUserId]  = useState('')
  const [isloading, setIsLoading] = useState(true);
  const [dailyAmount, setDailyAmount] = useState();
  const [payload, setPayload] = useState({});
  const [amount_per_day, setAmountPerDay] = useState("");
  const [days_left, setDaysLeft] = useState("");
  const [initial_deposit, setInitialDeposit] = useState("");
  const [installemnt_days, setInstallmentDays] = useState("");
  const [no_of_days, setNoOfDays] = useState("");
  const [product_name, setProductName] = useState("");
  const [product_brand, setProductBrand] = useState("");
  const [product_details, setProductDetails] = useState("");
  const [product_duration, setProductDuration] = useState("");
  const [product_image, setProductImage] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [unitCount, setUnitCount] = useState("");
  const [optionId, setPaymentOptionId] = useState(0)
  const [userPaylod, setUserPayload ] = useState(userPayload)
  const [option, setOption] = useState(0)
 const [email, setEmail] = useState("")
 const [phone_no, setPhoneNo] = useState("")
 const [name, setName] = useState("")
  const sub_total = 0;

  const [showPayment, setShowPayment] = useState(false);

  const openPayment = () => {
    setShowPayment(true);
  };

  const closePayment = () => {
    setShowPayment(false);
  };

   const flutterConfig = {
    public_key: 'FLWPUBK-bb7997b5dc41c89e90ee4807684bd05d-X',
    tx_ref: Date.now(),
    amount: 1,
  
    currency: 'NGN',
    // redirect_url: "https://a3dc-197-210-85-62.ngrok.io/v1/webhooks/all",
    payment_options: "card",
    // payment_plan:63558,
    customer: {
      phonenumber: phone_no,
      email:email, 
      name: name, 
    },
    customizations: {
      title: "Payment from Egoras savings",
      description: 'Payment for items in cart',
      logo: 'https://egoras.com/img/egoras-logo.svg',
    },
  };

  console.log("this are the items ", phone_no )
  const handleFlutterPayment = useFlutterwave(flutterConfig);

  const checkout = async (
    customer_id,
    product_id,
    installment_days,
    startDate,
    endDate
  ) => {
    
    const payload_data = {
      customer_id,
      product_id,
      installment_days,
      startDate,
      endDate,
      // spread_balance,
    };

    console.log(payload_data);

    let call = await axios
      .post(api_url2 + "/v1/checkout/add", payload_data, config)
      .then((response) => {
        console.log(response.data);
        setDailyAmount(response.data.details.rounded);

        const {
          amount_per_day,
          days_left,
          initial_deposit,
          installment_days,
          no_of_days,
        } = response.data.details;
        const {
          product_name,
          product_brand,
          product_details,
          product_duration,
          product_image,
          amount,
        } = response.data.details.payloads;

        setAmountPerDay(amount_per_day);
        setDaysLeft(days_left);
        setInitialDeposit(initial_deposit);
        setInstallmentDays(installment_days);
        setNoOfDays(no_of_days);
        setProductName(response.data.items.product_name);
        setProductBrand(product_brand);
        setProductDetails(product_details);
        setProductDuration(product_duration);
        setProductImage(response.data.items.product_image);
        setAmount(response.data.items.amount);
        setTotal(parseInt(response.data.items.amount) + parseInt(deliveryFee));
        setUnitCount(response.data.items.unitCount);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log("error reported", err.response);
      });
  };
  const selectOption = (value) => {
    switch (value){
      case 0: 

        alert('payment set as card', product_id)
        handleFlutterPayment({
          callback: async (response) => {
            console.log(response)
            try {
              const verification = await verify(response.transaction_id, product_id)
     
              console.log(verification.data.data.data.amount, 'from me  ')
              closePaymentModal()
            } catch (error) {
              console.log(error.response)
            }

          },
          onClose: (response) => {
            console.log(response, "response from onclose ")

          }
        })
        
        break;

      case 1: (
        alert('wallet method selected')
      )
        break
    
    }

  }


  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const options = {
    method: "GET",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  };


  useEffect(() => {
    checkout(customer_id, product_id, installation_days, startDate, endDate);

  }, []);

  useEffect(() => {
    if (auth.user !== null){
      console.log(auth.user, 'user  exist ')
      setEmail(auth.user.user.email);
        setPhoneNo( auth.user.user.phoneNumber);
        setName( auth.user.user.fullname)
    }

  }, []);

  return (
    <>
      <div className="detailsModal">
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
                  <div className="delivery_card_body_cont1">Samuel Ifeanyi</div>
                  <div className="delivery_card_body_cont1">
                    62 Harold Wilson Drive, Borokiri, RV, Port Harcourt, Rivers
                  </div>
                  <div className="delivery_card_body_cont1">08164020234</div>
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
                          ₦{dailyAmount}
                        </div>
                      </td>
                      {/* <td className="save_item_data1b">
                                <div className="assets-data-name center_name">
                                  ₦{amount}
                                </div>
                              </td> */}
                      <td className="save_item_data1b">
                        <div className="assets-data-name_last">₦{amount}</div>
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
              <div className="wit_card" onClick={() => {
                  setOption(0)
              }}>
                Pay via card{" "}
                <input type="checkbox" name="payment" id="" className="checkBox" />
              </div>
            </div>
            {/* ===================== */}
              <div className="cart_area2_select" onClick={()  => {
                  setOption(1)
                 }}>
              <div className="wit_card">
                Pay via wallet {" "}
                <input type="checkbox" name="payment" id="" className="checkBox"  />
              </div>
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
              Sub Total:{" "}
              <span className="sub_total_div_span">₦{sub_total}</span>
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
              Total <span className="sub_total_div_span">₦{amount}</span>
            </div>
            {/* ========== */}
            {/* ========== */}

            <button
              className="checkout_btn1a"
              onClick={() => {
                // openPayment();
                selectOption(option)
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {showPayment ? (
        <Dashboard_Checkout_Page
          cAmount={1}
          getProductId={product_id}
          closePaymentModal={closePayment}
        />
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,

})

export default connect(mapStateToProps, {
  createOrder,
})
(CheckoutModalComponent);
