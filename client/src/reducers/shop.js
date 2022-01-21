import { FETCH_CART } from "../actions/types";

const initialState = {
  cart: [
    {
      id: 1,
      img: "/img/samsung_tv_555.jpeg",
      name: "Samsung smart tv goodluck series",
      total_items: " 19",
      days_left: "28",
      days_left_percent: "82%",
      total_locked_amount: " 150,000",
      quantity: "1",
      unit_price: 350000,

      // ratio: "175%",
    },
    {
      id: 2,
      img: "/img/samsung_tv_555.jpeg",
      name: "Lg smart tv series",
      total_locked_amount: " 80,000",
      total_items: " 200",
      days_left: "13",
      days_left_percent: "27%",
      quantity: "2",
      unit_price: 150000,
    },
    {
      id: 3,
      img: "/img/samsung_tv_555.jpeg",
      name: "Iphone 12pro max",
      total_items: " 170",
      total_locked_amount: " 250,000",
      days_left: "23",
      days_left_percent: "77%",
      quantity: "2",
      unit_price: 550000,
    },
  ],
  products: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CART:
      // console.log(payload);

      return {
        ...state,
        cart: payload,
      };

    default:
      return state;
  }
}
