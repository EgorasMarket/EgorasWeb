import React, { useState, useEffect, useCallback } from "react";
import PaymentsIcon from "@mui/icons-material/Payments";
import Carousel from "react-multi-carousel";
import "../../../../css/itemsDetailsPage.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "axios";
import { ProductImageCarousel } from "./ProductImageCarousel";
import "../Dashboard/DashboardStyles/dashboardCart.css";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CallIcon from "@mui/icons-material/Call";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { NoDataFoundComponent } from "../Dashboard/NodataFound/NoDataFoundComponent";
// import { ProductDescription } from "./ProductDescription";
import Dashboard_Checkout_Page from "../Dashboard/DashboardPages/Dashboard_Checkout_Page";
import { numberWithCommas } from "../../../../static";

// import CheckoutModalComponent from "./CheckoutModalComponent";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Accordion from "./Accordion";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import { stringify } from "uuid";

const InstallmentComponent = ({
  product_duration,
  roundedAmount,
  percentage,
  initial_deposit,
  paymentPerday,
  numberWithCommas,
}) => {
  return (
    <div>
      <div className="amount_item_div">
        ₦{numberWithCommas(parseInt(paymentPerday).toFixed())}{" "}
        <span className="per_day"> / per-day</span>
      </div>

      <div className="amount_item_div total_amount">
        <span className="sub_total_txt">Price: </span> ₦
        {numberWithCommas(roundedAmount)}
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

const ItemDetailComponent = ({
  payload,
  card,
  user_id,
  CloseModal,
  specification,
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
  const [activeBg, setActiveBg] = useState("features");
  const [moreImg, setMoreImg] = useState([]);
  const [outrightProducts, setOutrightProducts] = useState([]);
  // const [categoryName, setCategoryName] = useState("");
  const [categ, setcate] = useState([]);
  const [food, setFood] = useState([]);
  //destructure the payload and return values
  const {
    amount,
    percentage,
    product_brand,
    product_category_code,
    product_category_desc,
    product_details,
    product_duration,
    product_id,
    product_image,
    more_image,
    roundedAmount,
    product_name,
    product_specifications,
    product_type,
    initial_deposit,
    paymentPerday,
    payment_type,
    days_left,
    no_of_days,
    no_of_days_paid,
    startDate,
    endDate,
  } = payload;

  console.log("====================================");
  console.log(payload.product_category_desc);
  console.log("====================================");
  var categoryName = payload.product_category_desc;
  console.log("====================================");
  console.log(categoryName);
  console.log("====================================");
  useEffect(() => {
    if (more_image != null) {
      let splited = JSON.parse(more_image);
      setMoreImg(splited);
      console.log(more_image.split(","));
      console.log(JSON.parse(more_image));
    }
  }, [more_image]);
  const text = "No Products Found";
  const openDetailsModal = () => {
    setDetailsModal(true);
  };
  const closeDetailModal = () => {
    setDetailsModal(false);
  };
  // let spec = [product_specifications];
  // spec.push(product_specifications)
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };
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
  const responsive8 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1680 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1680, min: 1420 },
      items: 5,
    },
    tabletMedium: {
      breakpoint: { max: 1420, min: 1024 },
      items: 4,
    },
    tabletSmall: {
      breakpoint: { max: 1024, min: 810 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 810, min: 590 },
      items: 3,
    },
    mobileSmall: {
      breakpoint: { max: 590, min: 400 },
      items: 2,
    },
    mobileSmaller: {
      breakpoint: { max: 400, min: 0 },
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
    axios
      .get(api_url2 + "/v1/product/retrieve/outright/products", null, config)
      .then((data) => {
        //console.log(data.data.data, "phlip22278");

        setOutrightProducts(data.data.data);
        // setCaping({
        //   code3:data.data.data.product_category_desc
        // })
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/category", null, config)
      .then((data) => {
        //console.log(data.data.data, "Anthonia");

        // const pad = data.data.data[0].product_category_code;

        setcate(data.data.data);

        setFood(data.data.data.product_category_code);

        //console.log(food, " water is good for cooking");

        // setOutrightProducts(data.data.data);
        // setCaping({
        //   code3:data.data.data.product_category_desc
        // })
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    checkProductType(product_type);
    console.log(categoryName, "ryhtej");
    axios
      .get(
        api_url2 + "/v1/product/retrieve/products/byId/" + categoryName,
        null,
        config
      )
      .then((data) => {
        console.log(data.data, "item detail component ");

        setTerm(data.data.data);

        // setTerm(data.data.data)
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, [categoryName]);
  const data1 = product_image;

  // {
  //   //console.log(spec, " welcome  Daniel");
  // }
  // const numberWithCommas = (x) => {
  //   // return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  // };
  // //console.log(product_id);

  return (
    <>
      {modal == false ? null : (
        <div className="checkout_main">
          <div className="checkout_modal_out" onClick={CloseModal}></div>
          <Dashboard_Checkout_Page
            cAmount={100}
            // cAmount={parseInt(roundedAmount)}
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
            {/* <img
              src={product_image}
              alt=""
              className="product_details_img"
            /> */}
            {moreImg.length == 0 ? (
              <img src={product_image} className="image_carooooo" />
            ) : (
              <ProductImageCarousel
                img={moreImg[0]}
                img2={moreImg[1]}
                img3={moreImg[2]}
              />
            )}
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
                  roundedAmount={roundedAmount}
                  percentage={percentage}
                  paymentPerday={paymentPerday}
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
                <ShoppingCartCheckoutIcon className="payment_btn_icon" />
                Proceed to Checkout
              </button>
            </div>
            <div className="offline_payment_div">
              <div className="offline_payment_tittle">
                For offline bookings contact:
              </div>
              <div className="offline_payment_para">
                <CallIcon className="call_us_icon" /> <a href='https://web.whatsapp.com/send?phone=08164020234'>08164020234</a>, <a href='https://web.whatsapp.com/send?phone=090234567893'>090234567893</a>
              </div>
            </div>
            {payment_type === "INSTALLMENT" ? (
              <div className="quantity_div">
                <div className="Notice_Title">Notice:</div>
                <div className="items_left_div">
                  <CreditScoreIcon className="creditCardIcon_icon" />
                  This item has an upfront payment of : {percentage}%
                </div>
                <span className="upfront_para">
                  <PaymentsIcon className="creditCardIcon_icon" />
                  That means you are to pay{" "}
                  <span className="percent_days_amnt">
                    ₦{numberWithCommas(parseInt(initial_deposit).toFixed())}
                  </span>
                  before this item can be locked by you.
                </span>
              </div>
            ) : null}
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
              id="features"
              className={
                activeBg == "features"
                  ? "description_click1 description_click1_active"
                  : "description_click1"
              }
              onClick={changeBg}
            >
              Features
            </div>
            <div
              id="descript"
              className={
                activeBg == "descript"
                  ? "description_click1 description_click1_active"
                  : "description_click1"
              }
              onClick={changeBg}
            >
              Description
            </div>
          </div>

          <div className="description_body">
            {activeBg == "features" ? (
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
            ) : (
              <div className="specification_div">
                {/* {specification.map((desc) => (
                      <tr>
                        <td>{desc}</td>
                      </tr>
                    ))} */}
                {/* {specification} */}
                <div
                  className="for-des"
                  dangerouslySetInnerHTML={{ __html: specification }}
                />
              </div>
            )}
          </div>
        </div>
        {/* {spec.map((pad) => (
              <div style={{ display: "inline-block" }}>{pad}</div>
            ))} */}
        {/* ================ */}
        {/* ================ */}
        {/* =================================================================================================================================================================================================================================================================== */}
        {/* =================================================================================================================================================================================================================================================================== */}

        <div className="products_display_body" id="computerAcc">
          <div className="products_display_body_heading">
            Similar Products
            <a
              href={`/dashboard/products/categories/` + categoryName}
              className="se_all_btnn"
            >
              SEE ALL
              <ChevronRightIcon />
            </a>
          </div>
          <div className=".products_display_body_conts_pad">
            {term.length <= 0 ? (
              <NoDataFoundComponent text={text} />
            ) : (
              <>
                <div className="show_prods_on_mobile">
                  {term.map(
                    (asset) => (
                      // if (product_category_desc === asset.product_category_desc) {
                      // return (
                      <a
                        href={`/dashboard/products/details/${
                          asset.id
                        }/${asset.product_name.replace(/\s+/g, "-")}`}
                      >
                        <li className="carous_list no_marg inventory_cards">
                          <div
                            className="storeTiles_storeTileContainer__HoGEa"
                            style={{
                              backgroundImage: `url(${asset.product_image})`,
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
                            {asset.payment_type == "OUTRIGHT" ? (
                              <div className="out_right_install_tag">
                                <button
                                  className="out_right_install_tag_btn"
                                  style={{
                                    background: "#3ebc6e",
                                    borderColor: "#3ebc6e",
                                  }}
                                >
                                  Outright
                                </button>
                              </div>
                            ) : (
                              <div className="out_right_install_tag">
                                <button className="out_right_install_tag_btn">
                                  Savings
                                </button>
                              </div>
                            )}
                            <div className="storeTiles_storeTileBottomContainer__2sWHh">
                              <div className="asset_name">
                                {asset.product_name}
                              </div>
                              <div class="asset_prices_div">
                                <div className="asset_title">
                                  {asset.payment_type == "OUTRIGHT" ? (
                                    <span className="init_amount">
                                      ₦{numberWithCommas(asset.amount)}{" "}
                                    </span>
                                  ) : (
                                    <span className="init_amount">
                                      ₦{numberWithCommas(asset.roundedAmount)}{" "}
                                    </span>
                                  )}
                                  {asset.payment_type == "OUTRIGHT" ? (
                                    <span className="slashed_price">
                                      ₦{numberWithCommas(asset.amount * 2)}
                                    </span>
                                  ) : (
                                    <span className="slashed_price">
                                      ₦
                                      {numberWithCommas(
                                        asset.roundedAmount * 2
                                      )}
                                    </span>
                                  )}
                                </div>
                                {asset.payment_type == "OUTRIGHT" ? null : (
                                  <div className="amount_per_day_div">
                                    ₦
                                    {numberWithCommas(
                                      (
                                        asset.amount / asset.product_duration
                                      ).toFixed()
                                    )}
                                    <span className="per_day_symbol">
                                      {" "}
                                      / perday
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                            {/* </a> */}
                          </div>
                        </li>
                      </a>
                    )
                    // );
                  )}
                </div>
                <Carousel
                  responsive={responsive8}
                  className="partnerCards LEFTARROW market_carous"
                  showDots={false}
                  //   infinite={false}
                  autoPlay={false}
                  autoPlaySpeed={6000}
                  transitionDelay={"2s"}
                  infinite={false}
                  draggable={true}
                  // transitionDuration={500}
                  swipeable={true}
                  style={{ height: "25em" }}
                >
                  {term.map((asset) => (
                    <a
                      href={`/dashboard/products/details/${
                        asset.id
                      }/${asset.product_name.replace(/\s+/g, "-")}`}
                    >
                      <li className="carous_list">
                        <div
                          className="storeTiles_storeTileContainer__HoGEa"
                          style={{
                            backgroundImage: `url(${asset.product_image})`,
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
                          {asset.payment_type == "OUTRIGHT" ? (
                            <div className="out_right_install_tag">
                              <button
                                className="out_right_install_tag_btn"
                                style={{
                                  background: "#3ebc6e",
                                  borderColor: "#3ebc6e",
                                }}
                              >
                                Outright
                              </button>
                            </div>
                          ) : (
                            <div className="out_right_install_tag">
                              <button className="out_right_install_tag_btn">
                                Savings
                              </button>
                            </div>
                          )}
                          <div className="storeTiles_storeTileBottomContainer__2sWHh">
                            <div className="asset_name">
                              {asset.product_name}
                            </div>
                            <div class="asset_prices_div">
                              <div className="asset_title">
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <span className="init_amount">
                                    ₦{numberWithCommas(asset.amount)}{" "}
                                  </span>
                                ) : (
                                  <span className="init_amount">
                                    ₦{numberWithCommas(asset.roundedAmount)}{" "}
                                  </span>
                                )}
                                {asset.payment_type == "OUTRIGHT" ? (
                                  <span className="slashed_price">
                                    ₦{numberWithCommas(asset.amount * 2)}
                                  </span>
                                ) : (
                                  <span className="slashed_price">
                                    ₦{numberWithCommas(asset.roundedAmount * 2)}
                                  </span>
                                )}
                              </div>
                              {asset.payment_type == "OUTRIGHT" ? null : (
                                <div className="amount_per_day_div">
                                  ₦
                                  {numberWithCommas(
                                    (
                                      asset.amount / asset.product_duration
                                    ).toFixed()
                                  )}
                                  <span className="per_day_symbol">
                                    {" "}
                                    / perday
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          {/* </a> */}
                        </div>
                      </li>
                    </a>
                  ))}
                </Carousel>
              </>
            )}
          </div>
          {/* </div> */}
        </div>
        {/* Carousel end==============================
==============================================
============================= */}
        {/* ============= */}
        {/* ============= */}
        {/* ============= */}
        {/* ============= */}
        {/* =================================================================================================================================================================================================================================================================== */}
        {/*  Projects Section start*/}
        {/* ============= */}
        {/* ============= */}
        {/* ============= */}
        {/* ============= */}
        <section className="faq_section">
          <div className="accordion_title">
            Frequently Asked Questions(FAQ).
          </div>
          <Accordion title="What is Egoras Smart savings all about?">
            <div className="accordion_body">
              The Egoras smart savings plan is a platform that lets you save
              over a period of time to get any desired item. Seeing as most
              persons do not have the instant funding to buy off items, how
              about a platform that lets you gather up the funds in a couple
              months and become an asset owner.
            </div>
          </Accordion>
          <Accordion title="How do I save on the platform?">
            <div className="accordion_body">
              Saving on the Egoras platform is super easy and straightforward.
              Sign up with the click of a button, connect your wallet/bank,
              search your desired items, then proceed to save with a payment
              structure/plan of your choice. Items are all budget friendly at
              affordable prices.
            </div>
          </Accordion>
          <Accordion title="How long is the savings package?">
            <div className="accordion_body">
              The savings package is for a two months duration, users have the
              luxury of choosing how to save within the two months, whether
              daily or weekly, e.t.c
            </div>
          </Accordion>
          <Accordion title="Are the discounts attached real?">
            <div className="accordion_body">
              The discount attached to items are as real as can be. The idea is
              to make this items affordable and accessible to anyone and
              everyone.
            </div>
          </Accordion>
          <Accordion title="How do I get to confirm my product is working before delivery?">
            <div className="accordion_body">
              Products would be tested and confirmed at the office before being
              shipped out and buyer would be notified of the products working
              condition.
            </div>
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

const mapStateToProps1 = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.shop.cart,
});

export default ItemDetailComponent;
