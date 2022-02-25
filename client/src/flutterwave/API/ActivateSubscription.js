import axios  from '../Axios'

const ActivateSubscription  = async (id) => {
    const body = {
        seckey: "FLWSECK-26a59517b4cd2e97b661af9868a2e9ab-X"

    }
    //console.log(id)
    const fetch_by_tx = 1; 

   await  axios.post(`subscriptions/${id}/activate?fetch_by_tx=${fetch_by_tx}`, body ).then(response => {
        //console.log(response,'response from script')
    }).catch(err => {
        //console.log(err.response, "message from exception")
    })
}

export default ActivateSubscription; 