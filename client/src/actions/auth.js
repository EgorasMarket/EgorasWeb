import axios from "axios";
import { setAlert } from "./alert";
// import { LOGIN_FAIL, LOGIN_SUCCESS } from "./types";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  API_URL2 as api_url2,
} from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    const res = localStorage.token;
    console.log("Load User is called");
    dispatch({
      type: USER_LOADED,
      payload: res,
    });
  } else {
    console.log("Load User is empty");
    dispatch({
      type: AUTH_ERROR,
      payload: "",
    });
  }
};

// Get Social Media Handles
export const getAuthentication =
  (fullname, email, password, BVN, phoneNumber, InfoReason) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      fullname,
      email,
      password,
      BVN,
      phoneNumber,
      InfoReason,
    });

    console.log(body);

    try {
      const res = await axios.post(
        api_url2 + "/v1/user/register",
        body,
        config
      );
      console.log(res);

      return {
        success: true,
        data: res.data,
      };
    } catch (err) {
      console.log(err.response);

      return {
        success: false,
        data: err.response,
      };
    }
  };

  export const getLogin = (email,password)=> async(dispatch)=>{

    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      email,
      password,
     
    });

    console.log(body);

    try {
      const res2 = await axios.post(
        api_url2 + "/v1/user/login",
        body,
        config
      );
      console.log(res2);

      return {
        success: true,
        data: res2.data,
      };
    } catch (err) {
      console.log(err.response);

      return {
        success: false,
        data: err.response,
      };
    }

  }



  export const getLogin2 = (firstname,lastname,email,phoneNumber,gender,relationship)=> async(dispatch)=>{

    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      firstname,lastname,email,phoneNumber,gender,relationship
     
    });

    console.log(body);

    try {
      const res = await axios.post(
        api_url2 + "/v1/user/add/customer/next-of-kin",
        body,
        config
      );
      console.log(res);

      return {
        success: true,
        data: res.data,
      };
    } catch (err) {
      console.log(err.response);

      return {
        success: false,
        data: err.response,
      };
    }

  }




  export const send1 = (gender,dateOfBirth)=> async(dispatch)=>{

    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      gender,
      dateOfBirth,
     
    });

    console.log(body);

    try {
      const res = await axios.put(
        api_url2 + "/v1/user/update/customer/info",
        body,
        config
      );
      console.log(res);

      return {
        success: true,
        data: res.data,
      };
    } catch (err) {
      console.log(err.response);

      return {
        success: false,
        data: err.response,
      };
    }

  }