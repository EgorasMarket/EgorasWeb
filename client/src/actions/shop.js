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
export const retrieveCart = (customer_id) => async (dispatch) => {
  console.log(customer_id);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(api_url2 + "/v1/cart/get/"+customer_id, null, config);
    console.log(res.data.data);
    // console.log("Yes I call You because i can", res.data.data);
    dispatch({
      type: FETCH_CART,
      payload: res.data.data,
    });
  } catch (error) {
    console.log("not registered");
    // dispatch({
    //   type: AUTH_ERROR,
    // });
  }
};

export const allCart = (items) => {
  return {
    type: FETCH_CART,
    payload: items,
  };
};

export const removeCart = (item) => {
  return {
    type: REMOVE_CART,
    payload: item,
  };
};
