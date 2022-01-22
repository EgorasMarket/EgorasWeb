import { FETCH_CART, REMOVE_CART } from "../actions/types";

const initialState = {
  cart: [],
  products: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CART:
      return {
        ...state,
        cart: payload,
      };
    case REMOVE_CART:
      return {
        ...state,
        cart: payload,
      };

    default:
      return state;
  }
}
