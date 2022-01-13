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
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  // console.log('okkkkkkk');

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(api_url2 + "/v1/user/info");
    console.log(res);
    // console.log("Yes I call You because i can", res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    console.log('not registered');
    dispatch({
      type: AUTH_ERROR,
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
      const res = await axios.post(
        api_url2 + "/v1/user/login",
        body,
        config
      );
      console.log(res);

      if (res.data.success === false) {
        //console.log(res.data);
        const errors = res.data.errors;
        //console.log(errors);
        // if (errors) {
        //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        // }
        dispatch({
          type: LOGIN_FAIL,
          payload: errors[0].msg,
        });

        return {
          status: false,
          data: errors[0].msg,
        };
      } else {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        return {
          status: true,
          data: res.data,
        };
      }
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