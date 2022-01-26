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

// // charge card step One
// export const proceedToCheckout =
//   async (
//     card_number,
//     expiry_month,
//     expiry_year,
//     cvv,
//     fullname,
//     email,
//     phone_number,
//     amount
//   ) =>
//   async (dispatch) => {
//     console.log(
//       card_number,
//       expiry_month,
//       expiry_year,
//       cvv,
//       fullname,
//       email,
//       phone_number,
//       amount
//     );
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     // try {
//     console.log("running inside action");

//   };
