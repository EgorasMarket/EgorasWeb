import React from 'react'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3'
import verify from './API/Verify'
import { connect } from "react-redux";
import { createOrder } from '../actions/shop'
const FlutterButton = ({ amount, customer, payment_title, payment_options, payment_plan, userPayload, user_id }) => {


  const flutterConfig = {
    public_key: 'FLWPUBK-bb7997b5dc41c89e90ee4807684bd05d-X',
    tx_ref: Date.now(),
    amount: amount,
    currency: 'NGN',
    // redirect_url: "https://a3dc-197-210-85-62.ngrok.io/v1/webhooks/all",
    payment_options: "card",
    payment_plan,
    customer: customer,
    customizations: {
      title: payment_title,
      description: "Payment for items in cart",
      logo: "https://egoras.com/img/egoras-logo.svg",
    },
  };

  const handleFlutterPayment = useFlutterwave(flutterConfig)

  return (
    <div className="cart_area2_select">
      <div className="wit_card" onClick={() => {
        handleFlutterPayment({
          callback: async (response) => {
            //console.log(response)
            try {
              const verification = await verify(response.transaction_id)
              const { success, card } = verification.data.data.data;
              let token = card.token
              if (success !== "succcessful ") {
                return;
              }


              //console.log(verification.data.data.data.amount, 'from me  ')
              closePaymentModal()
            } catch (error) {
              //console.log(error.response)
            }

          },
          onClose: (response) => {
            //console.log(response, "response from onclose ")

          }
        })
      }}>
        Pay via Flutterwave{" "}
      </div>
    </div>

  )

}
const mapStateToProps = (state) => ({
  auth: state.auth,

})

export default FlutterButton
