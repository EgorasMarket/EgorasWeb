import axios from "axios";
import { setAlert } from "./alert";
// import { LOGIN_FAIL, LOGIN_SUCCESS } from "./types";

import {
  FETCH_CART,
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_CART,
  API_URL2 as api_url2,
  API_URL3 as api_url3,
} from "./types";
// import setAuthToken from "../utils/setAuthToken";
import setAuthToken from "../utils/setAuthToken";



export const createWallet = (customer_id) => async (dispatch) => {
//   console.log(payload1, pin);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };


//   "customer_id": "string",
//   "walletAddress": "string",
//   "secKey": "string",
//   "mnemonic": "string"


try {
    
    //     address: "0xdd8E233F2c7Ec65e480A3AeC2315a5C13Dcd1ba6"
    // key: "0xff11c7691a7cf12f3a1944ce57fb4a3fc50cb23a53d607ea489c4dc38d6524e4"
    // mnemonic: "brief theme connect fish order point unusual family edit off purity ill"
   

    const res = await axios.get(
      api_url3 + "/api/transactions/create/wallet",
      null,
      config
    );
    // console.log(res.data);

    
    // /v1/wallet/create/wallet
    if (res.data !== undefined) {

        const walletAddress = res.data.address
        const secKey = res.data.key
        const mnemonic = res.data.mnemonic

        const payload = JSON.stringify({customer_id, walletAddress, secKey, mnemonic});
  
        // console.log(payload);


        let res6 = await axios.post(api_url2+"/v1/wallet/create/wallet", payload, config)

        // console.log(res6);

        return {
            success: true,
            data: res6.data,
            address: walletAddress
          };


    } else {
        return {
            success: false,
            data: res.data,
          };
    }
   
  } catch (error) {
    console.log(error);
    return {
        success: false,
        data: error.response,
      };
  }
};

