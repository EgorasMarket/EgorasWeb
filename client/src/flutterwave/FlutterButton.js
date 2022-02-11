import React from 'react'
import {useFlutterwave, closePaymentModal} from 'flutterwave-react-v3'


const FlutterButton  = ({amount, customer, payment_title, payment_options }) =>  {


    const flutterConfig  =  {
    public_key: 'FLWPUBK-bb7997b5dc41c89e90ee4807684bd05d-X',
    tx_ref: Date.now(),
    amount: amount,
    currency: 'NGN',
    redirect_url :"https://a3dc-197-210-85-62.ngrok.io/v1/webhooks/all",
    // payment_options:"0",
    customer:customer, 
    customizations: {
      title: payment_title,
      description: 'Payment for items in cart',
      logo: 'https://https://egoras.com/img/egoras-logo.svg',
    },
    };

   const handleFlutterPayment = useFlutterwave(flutterConfig)

  return (


    <div className="cart_area2_select">
      <div className="wit_card" onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response )
              closePaymentModal()
            },
            onClose: (response) => {
              console.log(response, "response from onclose ")

            }
          }) 
      }}>
        Pay via Flutterwave{" "}
      </div>
    </div>
  )
   
}

export default FlutterButton;
