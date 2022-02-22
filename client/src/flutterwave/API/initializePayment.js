// import axios from '../Axios'
import axios from 'axios';
import ActivateSUbscription from './ActivateSubscription'
const initializePayment = async (amount, ) => {

    const security = "FLWSECK-26a59517b4cd2e97b661af9868a2e9ab-X";
    const flutterConfig = {
        public_key: 'FLWPUBK-bb7997b5dc41c89e90ee4807684bd05d-X',
        tx_ref: Date.now(),
        amount,
      
        currency: 'NGN',
        // redirect_url: "https://a3dc-197-210-85-62.ngrok.io/v1/webhooks/all",
        payment_options: "card",
        // payment_plan:63558,
        customer: {
          phonenumber: '0810',
        email:'hitechsuite@gmail.com', 
          name: "kingsley goodluck Chiadi", 
        },
        customizations: {
          title: "Payment from Egoras savings",
          description: 'Payment for items in cart',
          logo: 'https://egoras.com/img/egoras-logo.svg',
        },
      };



    try {
        const call = await axios.post('https://api.flutterwave.com/v3/payments', flutterConfig , {headers: {
            Authorization:  `Bearer ${security}`, 
            "Content-Type": "application/json"
        }})
        if (!call){
            return; 
        }
       return call; 
    } catch (err) {
        console.log(err)
    }


}

export default initializePayment; 