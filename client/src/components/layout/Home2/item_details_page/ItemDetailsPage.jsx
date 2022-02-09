import React, { useState, useEffect, useCallback } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import Carousel from "react-multi-carousel";
import "../../../../css/itemsDetailsPage.css";
import axios from "axios";
import "../Dashboard/DashboardStyles/dashboardCart.css";
import { Calendar, DateRangePicker, DateRange } from "react-date-range";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { addDays, differenceInCalendarDays } from "date-fns";
import Dashboard_Checkout_Page from "../Dashboard/DashboardPages/Dashboard_Checkout_Page";
import Checkout from "./CheckoutModalComponent";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import { connect, useDispatch } from "react-redux";
import ItemDetailComponent from "./ItemDetailCompnent";

function ItemDetailsPage({ auth, match }) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(match.params.id);

  const [product_id, setProductId] = useState(match.params.id);
  const [user_id, set_user_id] = useState("");
  const [payload, setPayload] = useState({});
  const [modal, setModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [showCheckout, setCheckoutStatus] = useState(false);
  const [spec, setSpec] = useState([]);
  const [isAuthenticated, setIsAuthenticated ]  = useState(null)

  const openDetailsModal = () => {
    setDetailsModal(true);
  };

  const closeDetailModal = () => {
    setDetailsModal(false);
  };
  const OpenModal = () => {
    setModal(true);
  };

  const CloseModal = () => {
    setModal(false);
  };

  const openCheckout = () => {
    setCheckoutStatus(true);
  };

  const closeCheckout = () => {
    setCheckoutStatus(false);
  };

  useEffect(() => {
    const body = JSON.stringify({
      product_id,
    });
    if (auth) {
      set_user_id(auth.user.user.id);
    }

    axios
      .post(api_url2 + "/v1/product/retrieve/specific", body, config)
      .then((data) => {
        const {
          amount,
          percentage,
          product_brand,
          product_category_code,
          product_details,
          product_duration,
          product_id,
          product_image,
          product_name,
          product_specifications,
          unitCount,
          payment_type,
          product_type,
          initial_deposit,
          dailyAmount,
          amount_per_day,
          days_left,
          rounded,
          total_amount,
          no_of_days,
        } = data.data.data;

        console.log(data.data.data, "king");
        setPayload({
          amount,
          percentage,
          product_brand,
          product_category_code,
          product_details,
          product_duration,
          product_id,
          product_image,
          product_name,
          product_specifications,
          unitCount,
          payment_type,
          product_type,
          initial_deposit,
          dailyAmount,
          amount_per_day,
          days_left,
          rounded,
          total_amount,
          no_of_days,
        });
        const getSlid = data.data.data.product_specifications;

        setSpec(getSlid);

        //  const slipVar = getSlid.split(',');
        console.log("====================================");
        console.log(getSlid);
        console.log("====================================");

        console.log("====================================");
      })
      .catch((err) => {
        console.log(err.response); // "oh, no!"
      });
  }, []); // USE EFFECT TO  GET THE SPECIFIC PRODUCTS


  return (
  <>
      <ItemDetailComponent
        payload={payload}
        // numberWithCommas={numberWithCommas}
        card={spec}
        openDetailsModal={() => {
          openDetailsModal();
        }}
      />

      {detailsModal === true ? (
        <Checkout
          installation_days={payload.product_duration}
          product_id={product_id}
          customer_id={user_id}
        />
      ) : null}
</>
  );
}

const mapStateToProps1 = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.shop.cart,
});

export default connect(mapStateToProps1)(ItemDetailsPage);
