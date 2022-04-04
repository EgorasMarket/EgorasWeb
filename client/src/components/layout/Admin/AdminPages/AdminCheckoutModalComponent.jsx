import React, { useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import verify from '../../../../flutterwave/API/Verify';
import adminVerify from '../../../../flutterwave/API/AdminVerify';
import LoadingIcons from 'react-loading-icons';
import Success_Error_Component from '../../../assets/Success_Error_Component';

import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from '../../../../actions/types';
import {
  useFlutterwave,
  closePaymentModal,
} from 'flutterwave-react-v3';
import FlutterButton from '../../../../flutterwave/FlutterButton';
// import Dashboard_Checkout_Page from "../Dashboard/DashboardPages/Dashboard_Checkout_Page";
import PaymentPlan from '../../../../flutterwave/API/PaymentPlan';
// import verifyTransaction from '../../../../flutterwave/API/Verify'
import { createOrder } from '../../../../actions/shop';
import { connect } from 'react-redux';
import initPayment from '../../../../flutterwave/initPayment';
import initializePayment from '../../../../flutterwave/API/initializePayment';
import { Redirect } from 'react-router-dom';

const CheckoutModalComponent = ({
  payload,
  closeCheckoutOptions,
  auth,
}) => {
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

  const [user_id, setUserId] = useState(
    localStorage.getItem('adminCusId')
  );
  const [isloading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [phone_no, setPhoneNo] = useState('');
  const [walletBalance, setWalletBalance] = useState(false);
  const [ProcessingDiv, setProcessingDiv] = useState(false);

  const [name, setName] = useState('');
  const [option, setOption] = useState(-1);
  const [customer_data, setCustomerData] = useState({});
  const [tokenBal, setTokenBal] = useState('0.000');
  const [assetVal, setAssetVal] = useState('0.000');
  const [tokenSign, setTokenSign] = useState();
  const [errorDiv, setErrorDiv] = useState(false);
  const [successDiv, setSuccessDiv] = useState(false);
  const [order_id, setOrder_id] = useState('');
  const [success_msg, setSuccessMsg] = useState('');
  const [error_msg, setErrorMsg] = useState('');

  const [total, setTotal] = useState('');

  // console.log(phone_no, name, option)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // const [addressName, setAddressName] = useState("")

  useEffect(() => {
    axios
      .get(
        api_url2 + '/v1/wallet/get/wallet/info/' + user_id,
        null,
        config
      )
      .then((data) => {
        console.log(data.data.data.balance);
        setTokenBal(data.data.data.balance);
        setAssetVal(data.data.data.balance * 1);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  useEffect(() => {
    if (payment_type === 'OUTRIGHT') {
      // alert(initial_deposit);
      setTotal(amount);
    } else if (payment_type === 'INSTALLMENT') {
      setTotal(initial_deposit);
    }
    // setIsLoading2(true);
    axios
      .get(api_url2 + '/v1/wallet/get/all/tokens', null, config)
      .then((data) => {
        console.log(data.data.data, 'powerful');
        setTokenSign(data.data.data[0].tokenSymbol);
      })
      .catch((err) => {
        console.log(err.response); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + '/v1/user/info/byId/' + user_id, null, config)
      .then((data) => {
        console.log(data.data, 'Admin cus info');
        setEmail(data.data.user.email);
        setPhoneNo(data.data.user.phoneNumber);
        setName(data.data.user.fullname);
        const { fullname, email, phoneNumber, id } = data.data.user;
        setCustomerData({
          name: fullname,
          email,
          phonenumber: phoneNumber,
          customer_id: id,
        });
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });
  }, []);

  const flutterConfig = {
    public_key: 'FLWPUBK-bb7997b5dc41c89e90ee4807684bd05d-X',
    tx_ref: 'EGC-' + Date.now(),
    amount: 1,

    currency: 'NGN',
    // redirect_url: "https://a3dc-197-210-85-62.ngrok.io/v1/webhooks/all",
    payment_options: 'card',
    // payment_plan:63558,
    customer: {
      phonenumber: phone_no,
      email: email,
      name: name,
    },
    meta: {
      customer_id: user_id,
      info: 'this is an addtional information',
    },
    customizations: {
      title: 'Payment from Egoras savings',
      description: 'Payment for items in cart',
      logo: 'https://egoras.com/img/egoras-logo.svg',
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
    //     // console.log(call)

    //     // handleFlutterPayment({callback: ()=> {
    //     //   alert('here')
    //     // }})
    // }
    switch (value) {
      case 0:
        // alert('payment set as card', product_id)
        handleFlutterPayment({
          callback: async (response) => {
            console.log(response);
            try {
              if (!response.transaction_id) {
                alert(
                  "We couldn't return any information from this payment please try again."
                );
              }
              const verification = await adminVerify(
                user_id,
                response.transaction_id,
                product_id,
                startDate,
                endDate
              );

              console.log(
                verification.data.data.data.amount,
                'from me  '
              );
              closePaymentModal();
            } catch (error) {
              console.log(error.response);
            }
          },
          onClose: (response) => {
            // console.log(response, "response from onclose ")
          },
        });

        break;

      case 1:
        setProcessingDiv(true);
        console.log(total);

        if (tokenBal >= Number(total)) {
          setProcessingDiv(true);
          //
          const orderBody = JSON.stringify({
            user_id,
            product_id,
            initial_pay: initial_deposit,
            startDate,
            endDate,
            days_left,
          });

          console.log(orderBody);
          const res = await axios
            .post(
              api_url2 + '/v1/order/add/order/crypto/admin',
              orderBody,
              config
            )
            .then((response) => {
              console.log(
                response,
                ' response after order endpoint is called'
              );

              setProcessingDiv(false);
              setSuccessMsg(response.data.message);
              setOrder_id(response.data.order_id);
              setErrorDiv(false);
              setSuccessDiv(true);
              alert(
                'Your order have been completed successfully, You will redirected to the market place'
              );
              return <Redirect to="/dashboard" />;
            })
            .catch((err) => {
              console.log(err.response);
              setProcessingDiv(false);
              setSuccessDiv(false);
              setErrorMsg(err.response);
              setErrorDiv(true);
            });
          //
        } else {
          console.log(
            'This user dont have enough balance to carry this transaction '
          );
          setProcessingDiv(false);
          setSuccessDiv(false);
          setErrorMsg('Insufficient funds');

          // setErrorMsg("An error")
          setErrorDiv(true);
        }
        break;
    }
  };

  return (
    <>
      <div className="detailsModal">
        <div className="detailsModalSection1">
          <div className="bacKbutton" onClick={closeCheckoutOptions}>
            Previous
            <ArrowForwardIosIcon className="arrow_back" />
          </div>
          {/* <div className="detailsModalSection1_area1">
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
                  <div className="delivery_card_body_cont1">{customer_data.name}</div>
                  <div className="delivery_card_body_cont1">
                    {addressName}
                  </div>
                  <div className="delivery_card_body_cont1">{customer_data.phonenumber}</div>
                </div>
              </div>
     
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
          </div> */}

          <div className="detailsModalSection1_area2">
            <div className="detailsModalSection1-area2_title">
              Review Order
            </div>
            <div className="review_order_div">Delivery 1 of 1</div>
            <div>
              <div class="save_prod_deta">
                <table className="save_item_table">
                  <thead className="assets-category-titles">
                    <tr className="assets">
                      <th className="assets-category-titles-heading1">
                        Item
                      </th>
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
                    {' '}
                    <tr className="assets-category-row">
                      <td className="save_item_data">
                        <div className="assets-data height_data">
                          <img
                            src={product_image}
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
                        <div className="assets-data-name_last">
                          ₦{amount}
                        </div>
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
            {/* <div className="cart_area2_select">
              <div className="wit_card" onClick={() => {
                  setOption(0)
              }}>
                Pay via card{" "}
                <input type="checkbox" name="payment" id="" className="checkBox" />
              </div>
            </div> */}
            <div className="cart_area2_select">
              <div className="wit_card">
                Pay via card{' '}
                <input
                  type="radio"
                  name="payment"
                  id=""
                  className="checkBox"
                  style={{ display: 'block', cursor: 'pointer' }}
                  onClick={() => {
                    setOption(0);
                    setWalletBalance(false);
                  }}
                />
              </div>
            </div>
            {/* ===================== */}
            {/* <div className="cart_area2_select" onClick={()  => {
                  setOption(1)
                 }}>
              <div className="wit_card">
                Pay via wallet {" "}
                <input type="checkbox" name="payment" id="" className="checkBox"  />
              </div>
            </div> */}

            <div className="cart_area2_select">
              <div className="wit_card">
                Pay via wallet{' '}
                <input
                  type="radio"
                  name="payment"
                  id=""
                  className="checkBox"
                  style={{ display: 'block', cursor: 'pointer' }}
                  onClick={() => {
                    setOption(1);
                    setWalletBalance(true);
                  }}
                />
              </div>
              {walletBalance == true ? (
                <div className="wallet_bal_acct">
                  Wallet Bal: {parseInt(tokenBal).toFixed(3)}{' '}
                  {tokenSign}
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
              <br />. Ensure sufficient balance to cover this
              transaction.
            </div>
            {/* ========== */}
            {/* ========== */}
            {/* ========== */}
            {/* ========== */}
            <div className="sub_total_div">
              Sub Total:{' '}
              <span className="sub_total_div_span">₦{amount}</span>
            </div>
            {/* ========== */}
            {/* ========== */}
            {/* ========== */}
            {/* ========== */}
            <div className="sub_total_div">
              Delivery Fee:{' '}
              <span className="sub_total_div_span">₦0</span>
            </div>
            {/* ========== */}
            {/* ========== */}
            <div className="secure_transac_text">
              {' '}
              Transactions are 100% Safe and Secure
            </div>
            {/* ========== */}
            {/* ========== */}
            <div className="transac_secure_div">
              Total{' '}
              <span className="sub_total_div_span">₦{amount}</span>
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
      {ProcessingDiv == false ? null : (
        <div className="processing_transac_div">
          <LoadingIcons.Bars fill="#229e54" />
          Processing Transaction...
        </div>
      )}

      {successDiv == true ? (
        <div className="processing_transac_div insufficient">
          <Success_Error_Component
            remove_success_div={closeCheckoutOptions}
            btn_txt="Continue"
            // msg={success_msg}
            msg={`${success_msg}, Order-Id: ${order_id}`}
            errorMsgDiv={errorDiv}
            link_btn={true}
            src={
              payment_type === 'OUTRIGHT'
                ? '/dashboard/savings'
                : '/dashboard/products'
            }
          />
        </div>
      ) : null}

      {errorDiv == false ? null : (
        <div className="processing_transac_div insufficient">
          <Success_Error_Component
            // remove_success_div={() => setErrorDiv(true)}
            btn_txt="Fund Wallet"
            msg={error_msg}
            errorMsgDiv={errorDiv}
            link_btn={true}
            src="/dashboard/wallet"
            onclick={() => {
              setErrorDiv(false);
            }}
          />
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
