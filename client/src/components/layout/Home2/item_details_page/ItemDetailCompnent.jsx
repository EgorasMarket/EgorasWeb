import React, { useState, useEffect, useCallback } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import Carousel from "react-multi-carousel";
import "../../../../css/itemsDetailsPage.css";
import axios from "axios";
import "../Dashboard/DashboardStyles/dashboardCart.css";
// import ImageGallery from "react-image-gallery";

// import Accordion from "./Accordion";
// import ImageGallery from "react-image-gallery";
import { Calendar, DateRangePicker, DateRange } from "react-date-range";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { addDays, differenceInCalendarDays } from "date-fns";
import Dashboard_Checkout_Page from "../Dashboard/DashboardPages/Dashboard_Checkout_Page";
// import CheckoutModalComponent from "./CheckoutModalComponent.jsx";
// import "react-image-gallery/styles/css/image-gallery.css";
import CheckoutModalComponent from "./CheckoutModalComponent";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Accordion from "./Accordion";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";

const InstallmentComponent = ({
  product_duration,
  rounded,
  percentage,
  initial_deposit,
  amount,
  amount_per_day,
  numberWithCommas,
}) => {
  return (
    <div>
      <div className="amount_item_div">
        ₦{numberWithCommas(parseInt(amount_per_day).toFixed())}{" "}
        <span className="per_day"> / per-day</span>
      </div>

      <div className="amount_item_div total_amount">
        <span className="sub_total_txt">Price: </span> ₦
        {numberWithCommas(parseInt(amount).toFixed())}
        <span className="per_day"></span>
      </div>

      {/* <hr className="horizontal_rule" /> */}
      {/* ------- */}

      <div className="max_dura">
        <p className="no_margg">Savings Max Duration:</p>

        <div className="days_left_numb">
          <p className="no_margg">{product_duration}day(s)</p>
        </div>
      </div>
    </div>
  );
};

const OutrightComponent = ({
  product_duration,
  rounded,
  percentage,
  initial_deposit,
  amount,
  numberWithCommas,
}) => {
  return (
    <div>
      <div className="amount_item_div total_amount">
        <span className="sub_total_txt">Price: </span> ₦
        {numberWithCommas(parseInt(amount).toFixed())}
      </div>
      <div className="max_dura">
        <div className="days_left_numb">
          <p className="no_margg">Outright Buy</p>
        </div>
      </div>

      {/* <hr className="horizontal_rule" /> */}
      {/* ------- */}
    </div>
  );
};
const images = [
  {
    original: "/img/BAG.jpeg",
    thumbnail: "/img/BAG.jpeg",
  },
  {
    original: "/img/BAG.jpeg",
    thumbnail: "/img/BAG.jpeg",
  },
  {
    original: "/img/BAG.jpeg",
    thumbnail: "/img/BAG.jpeg",
  },
];
const ItemDetailComponent = ({
  payload,
  card,
  user_id,
  CloseModal,
  OpenModal,
  openCheckoutModal,
}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [modal, setModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [UID, setUserId] = useState(user_id);
  const [term, setTerm] = useState([]);
  const [activeBg, setActiveBg] = useState("descript");
  //destructure the payload and return values
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
    paymentPerday,
    days_left,
    rounded,
    total_amount,
    no_of_days,
  } = payload;

  const openDetailsModal = () => {
    setDetailsModal(true);
  };

  const closeDetailModal = () => {
    setDetailsModal(false);
  };
  // let spec = [product_specifications];
  // spec.push(product_specifications)

  const responsive6 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };
  const checkProductType = (payment_type) => {
    const outrightScenario = () => {};
    const installmentScenario = () => {};
    switch (payment_type) {
      case "OUTRIGHT":
        outrightScenario();
        break;
      case "INSTALLMENT":
        installmentScenario();
        break;
    }
  };

  useEffect(() => {
    checkProductType(product_type);

    axios
      .get(api_url2 + "/v1/product/retrieve/products", null, config)
      .then((data) => {
        console.log(data.data.data, "item detail component ");

        setTerm(data.data.data);

        // setTerm(data.data.data)
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });
  }, []);

  // {
  //   console.log(spec, " welcome  Daniel");
  // }
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };
  console.log(product_id);

  return (
    <>
      {modal == false ? null : (
        <div className="checkout_main">
          <div className="checkout_modal_out" onClick={CloseModal}></div>
          <Dashboard_Checkout_Page
            cAmount={parseInt(amount)}
            getProductId={product_id}
            click={CloseModal}
          />
        </div>
      )}
      {/* {dataFlow.map((item)=>{return( */}
      {/* <section className="no-bg">
        <div className="container"> */}
      <div className="products_area">
        {/* <div className="wrapper"> */}
          {/* <ImageGallery items={images} /> */}
        {/* </div> */}
        <div className="product_details_area1">
          <div className="details_area1_cont1">
            {" "}
            <img
              src={api_url2 + "/" + product_image}
              alt=""
              className="product_details_img"
            />
          </div>
          {/* ================ */}
          {/* ================ */}
          {/* ================ */}
          {/* ================ */}
          <div className="details_area1_cont2">
            {" "}
            <div className="product_details_Title">{product_name}</div>
            <div className="product_details_code">
              <span className="product_code_title">Product Code: </span>
              {product_category_code}
            </div>
            <div className="product_details_code" style={{ color: "#239e54" }}>
              <span className="product_code_title">Brand: </span>
              {product_brand}
              {/* {props.Brand} */}
            </div>
            {/* ----------------- */}
            {/* <hr className="horizontal_rule" /> */}
            {/* -------------- */}
            {payment_type === "INSTALLMENT" ? (
              <>
                <InstallmentComponent
                  initial_deposit={initial_deposit}
                  product_duration={product_duration}
                  rounded={rounded}
                  percentage={percentage}
                  amount={amount}
                  amount_per_day={paymentPerday}
                  numberWithCommas={numberWithCommas}
                />
              </>
            ) : (
              <>
                <OutrightComponent
                  amount={amount}
                  numberWithCommas={numberWithCommas}
                />
              </>
            )}
            {/* ======= */}
            {/* ======= */}
            {/* ======= */}
            {/* ======= */}
            {/* <hr className="horizontal_rule" /> */}
            {/* ------- */}
            <div className="buy_now_btn_div">
              <button className="buy_now_button" onClick={openCheckoutModal}>
                Proceed to Checkout
              </button>
            </div>
            <div className="quantity_div">
              <div className="items_left_div">
                This item has an upfront payment of : {percentage}%
              </div>
              <span className="upfront_para">
                That means you are to pay{" "}
                <span className="percent_days_amnt">
                  ₦{numberWithCommas(parseInt(initial_deposit).toFixed())}
                </span>
                before this item can be locked by you.
              </span>
            </div>
          </div>
        </div>
        {/* <div className="product_details_area">{asset}</div> */}
        {/* =======================================879087070y707680769067 */}
        {/* =======================================879087070y707680769067 */}
        {/* =======================================879087070y707680769067 */}
        {/* =======================================879087070y707680769067 */}
        {/* =======================================879087070y707680769067 */}

        <div className="description_area">
          <div className="description_header">
            <div
              id="descript"
              className={
                activeBg == "descript"
                  ? "description_click1 description_click1_active"
                  : "description_click1"
              }
            >
              Features
            </div>
          </div>

          <div className="description_body">
            <div className="description_table">
              <table class="_3a09a_1e-gU">
                <tbody>
                  {card.map((apple) => (
                    <tr>
                      <td>{apple}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* {spec.map((pad) => (
              <div style={{ display: "inline-block" }}>{pad}</div>
            ))} */}

        {/* ================ */}
        {/* ================ */}
        {/* =================================================================================================================================================================================================================================================================== */}
        {/* =================================================================================================================================================================================================================================================================== */}
        {/*  Projects Section start*/}
        <section className="projectsSection" id="projects">
          <div className="container">
            <div className="projectsArea">
              <div className="projectsLinea"></div>
              <div className="projectsTitleContentsa">
                <div className="projectTitle">
                  <h1 className="gttitle TITE">Recent Products</h1>
                </div>
                {/* 
              <a href="/explore_collaterals" className="projectsLink">
                Explore collaterals
                <div className="projectsLinkHover"></div>
              </a> */}
              </div>

              {/* Carousel start==============================
==============================================
============================= */}

              <Carousel
                responsive={responsive6}
                className="partnerCards LEFTARROW"
                showDots={false}
                //   infinite={false}
                autoPlay={true}
                autoPlaySpeed={6000}
                transitionDelay={"2s"}
                infinite={true}
                draggable={true}
                // transitionDuration={500}
                swipeable={true}
                style={{ height: "25em" }}
              >
                {term.map((asset) => (
                  <a
                    href={`/dashboard/products/details/${asset.id}/${asset.product_name}`}
                  >
                    <li className="carous_list">
                      <div
                        className="storeTiles_storeTileContainer__HoGEa"
                        style={{
                          backgroundImage: `url(${
                            api_url2 + "/" + asset.product_image
                          })`,
                          //           height: "200px",
                          //           width: "100%",
                          //           backgroundRepeat: "no-repeat",
                          //           backgroundSize: "cover",
                          //           borderRadius: "8px",
                          //           borderBottomLeftRadius: "0px",
                          //           borderBottomRightRadius: "0px",
                          //   backgroundPositionY: "center",
                        }}
                      >
                        <div className="storeTiles_storeTileOffersContainer__3v8lC">
                          <button className="items_remaining_btn">
                            {asset.payment_type == "OUTRIGHT" ? (
                              <p className="no_margg"> Buy now</p>
                            ) : (
                              <p className="no_margg"> Save now</p>
                            )}
                          </button>

                          {asset.payment_type == "OUTRIGHT" ? (
                            <div></div>
                          ) : (
                            <button className="items_remaining_btn2">
                              {" "}
                              40% locked
                            </button>
                          )}
                        </div>
                        <div className="storeTiles_storeTileBottomContainer__2sWHh">
                          <div className="asset_name">{asset.product_name}</div>
                          <div className="asset_title">
                            ₦{numberWithCommas(asset.amount)}{" "}
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.amount * 2)}
                            </span>
                          </div>
                        </div>
                        {/* </a> */}
                      </div>
                    </li>
                  </a>
                ))}
              </Carousel>
              {/* Carousel end==============================
==============================================
============================= */}
            </div>
          </div>
        </section>
        {/* ============= */}
        {/* ============= */}
        {/* ============= */}
        {/* ============= */}

        <section className="faq_section">
          {/* <Accordion title="Lorem Ipsum dolor it"  children={<div>
          
          vgjfghfhasfdhfsgdhfahhvasd</div>}/> */}
          <Accordion title="How do I save for a product.">
            <div className="accordion_body"></div>
          </Accordion>
        </section>
        {/* ============= */}
        {/* ============= */}
        {/* ============= */}
        {/* ============= */}
        {/* ============= */}
        {/* ============= */}
        {/* ============= */}
        {/* ============= */}
      </div>
      {/* </div>
      </section> */}
      {/* )})} */}
    </>
  );
};

export default ItemDetailComponent;
