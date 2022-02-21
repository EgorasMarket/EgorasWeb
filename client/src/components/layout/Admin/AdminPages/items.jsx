import React, { useState, useEffect, useCallback } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import Carousel from "react-multi-carousel";
import "../../../../css/itemsDetailsPage.css";
import axios from "axios";
import "../../Home2/Dashboard/DashboardStyles/dashboardCart.css";
import { Calendar, DateRangePicker, DateRange } from "react-date-range";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { addDays, differenceInCalendarDays } from "date-fns";
import Dashboard_Checkout_Page from "../../Home2/Dashboard/DashboardPages/Dashboard_Checkout_Page";
import Checkout from "./check";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import { connect, useDispatch } from "react-redux";
import ItemDetailComponent from "./items2";
import LoginComp from "../../Home2/Login/LoginComp";

function ItemDetailsPage({ auth, match }) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(window.location.pathname.split("/"));
  // console.log(match.params.id);
  const [loginModal, setLoginModal] = useState(false);
  const [loginSuccess,setLoginSuccess]= useState(false);
  const [product_id, setProductId] = useState();
  const [user_id, set_user_id] = useState("");
  const [payload, setPayload] = useState({});
  const [modal, setModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [showCheckout, setCheckoutStatus] = useState(false);
  const [card, setSpec] = useState([]);
  const [isAuthenticated, setIsAuthenticated ]  = useState(null)

  const [addressName,setAddressName]=useState({contactAddress:""})

  const {contactAddress}=addressName

  
  useEffect(() => {
    console.log(auth);

    if (window.location.pathname.split("/")[1] === 'dashboard') {
      setProductId(match.params.id)
      setIsAuthenticated(true)
    } else {
      setProductId(window.location.pathname.split("/")[3])
      setIsAuthenticated(false)
    }


  }, [auth]);

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

  const OpenLoginModal = () => {
    // console.log(auth.user.user);
    if (auth.user !== null) {
      console.log(auth.user.user);
      // set_user_id(customer_id);
      openDetailsModal();
      // checkout(
      //   user_id,
      //   product_id,
      //   daysAdded,
      //   startDate,
      //   endDate
      //   );
      } else {
      setLoginModal(true);
      
    }
  };

  const CloseLoginModal = () => {
    setLoginModal(false);
  };

  const callback = useCallback((loginSuccess) => {
    setLoginSuccess(loginSuccess);

    if (loginSuccess === true) {
      CloseLoginModal()
      window.location.reload()
      // openDetailsModal();
      // checkout(
      //   user_id,
      //   product_id,
      //   daysAdded,
      //   startDate,
      //   endDate
      // );
    } else {
      
    }

  }, []);


  useEffect(()=>{
    axios.get(api_url2 + "/v1/user/address/info", null,
     config).then((response)=>{
 console.log(response , "wewter kings")
//  console.log(response.data.cusAddress. address,"market")

 setAddressName({contactAddress:response.data.cusAddress. address

 })
 console.log(addressName,"Bk is good for development")
     })

  })

  useEffect(() => {
    console.log(auth.isAuthenticated);
    const body = JSON.stringify({
      product_id,
    });
    if (auth.user !== null) {
      set_user_id(auth.user.user.id);
      console.log(auth.user.user);
    } else {
      set_user_id('')
      console.log('rrrrr');
    }

    axios
      .post(api_url2 + "/v1/product/retrieve/specific", body, config)
      .then((data) => {
        const {
          roundedAmount,
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
          paymentPerday,
          days_left,
          rounded,
          total_amount,
          no_of_days,
        } = data.data.data;

        console.log(data.data.data, "king");
        setPayload({
          roundedAmount,
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
          paymentPerday,
          days_left,
          rounded,
          total_amount,
          no_of_days,
        });
        const getSlid = data.data.data.product_specifications;
        // const myArray = getSlid.split(",");

        console.log(getSlid);

        setSpec(getSlid);

        // //  const slipVar = getSlid.split(',');
        // console.log("====================================");
        // console.log(getSlid);
        // console.log("====================================");

        // console.log("====================================");
      })
      .catch((err) => {
        console.log(err.response); // "oh, no!"
      });
  }, [product_id, auth]); // USE EFFECT TO  GET THE SPECIFIC PRODUCTS

  console.log(product_id);
  return (
    <>
      {loginModal == false ? null : (
        <div className="checkout_main">
          <div className="checkout_modal_out" onClick={CloseModal}></div>
          {/* <div>Login</div> */}
          {/* <Dashboard_Checkout_Page
            cAmount={parseInt(productDetails.amount)}
            click={CloseModal}
          /> */}
          <LoginComp parentCallback={callback} />
        </div>
      )}
      <div className="other2">
        <section className="no-bg">
          <div className="container">
            {detailsModal === true ? (
              <Checkout
                installation_days={payload.product_duration}
                product_id={product_id}
                customer_id={user_id}
                closeCheckoutOptions={closeDetailModal}
                apps={contactAddress}
              />
            ) : (
              <ItemDetailComponent
                payload={payload}
                // numberWithCommas={numberWithCommas}
                card={card}
                openCheckoutModal={() => {
                  // openDetailsModal();
                  OpenLoginModal()
                  // console.log('gggg');
                }}
              />
            )}
          </div>
        </section>
      </div>
    </>
  );
}

const mapStateToProps1 = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.shop.cart,
});

export default connect(mapStateToProps1)(ItemDetailsPage);
