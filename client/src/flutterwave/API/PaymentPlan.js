import axios from '../Axios'
import ActivateSUbscription from './ActivateSubscription'
const PaymentPlan = async () => {
    const body = {
        amount: "4000",
        name: "Payment information",
        interval: "daily",
        duration: "20",
        seckey: "FLWSECK-26a59517b4cd2e97b661af9868a2e9ab-X"
    }
    let planId = 0;

    try {
        const call = await axios.post('/paymentplans/create', body)
        if (!call) {
            return
        }
        return call;
    } catch (err) {
        console.log(err)
    }


}

export default PaymentPlan; 