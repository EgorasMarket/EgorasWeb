import axios from "axios";
import { setAlert } from "./alert";
// import { LOGIN_FAIL, LOGIN_SUCCESS } from "./types";

import {
  FETCH_CART,
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_CART,
  API_URL2 as api_url2,
} from "./types";
// import setAuthToken from "../utils/setAuthToken";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const proceedToCheckout = (card_number, expiry_month, expiry_year, cvv, fullname, email, phone_number, amount) => async (dispatch) => {
  console.log(card_number, expiry_month, expiry_year, cvv, fullname, email, phone_number, amount);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({card_number, expiry_month, expiry_year, cvv, fullname, email, phone_number, amount});

  console.log(body);
  try {
      
    const res = await axios.post(api_url2 + "/v1/payment/card", body, config);
    console.log(res.data);

    return {
        success: true,
    data: res.data,
    };
    // console.log("Yes I call You because i can", res.data.data);
    // dispatch({
    //   type: FETCH_CART,
    //   payload: res.data.data,
    // });
  } catch (error) {
    console.log(error);
    // dispatch({
    //   type: AUTH_ERROR,
    // });
  }
};


export const sendPin = (payload, pin) => async (dispatch) => {
    console.log(payload, pin);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    // const body = JSON.stringify({payload, pin});
    const body = {payload, pin};
  
    console.log(body);
    try {
        
      const res = await axios.post(api_url2 + "/v1/payment/card/pin", body, config);
      console.log(res.data);
  
      return {
          success: true,
      data: res.data,
      };
      // console.log("Yes I call You because i can", res.data.data);
      // dispatch({
      //   type: FETCH_CART,
      //   payload: res.data.data,
      // });
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: AUTH_ERROR,
      // });
    }
  };


