import React, { useState, useEffect, useCallback } from "react";
import PaymentsIcon from "@mui/icons-material/Payments";
import Carousel from "react-multi-carousel";
import "../../../../css/itemsDetailsPage.css";
import axios from "axios";
import { ProductImageCarousel } from "./ProductImageCarousel";
import "../Dashboard/DashboardStyles/dashboardCart.css";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CallIcon from "@mui/icons-material/Call";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { ProductDescription } from "./ProductDescription";
import Dashboard_Checkout_Page from "../Dashboard/DashboardPages/Dashboard_Checkout_Page";

// import CheckoutModalComponent from "./CheckoutModalComponent";
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
  roundedAmount,
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
        {numberWithCommas(parseInt(roundedAmount).toFixed())}
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
  roundedAmount,
  numberWithCommas,
}) => {
  return (
    <div>
      <div className="amount_item_div total_amount">
        <span className="sub_total_txt">Price: </span> ₦
        {numberWithCommas(parseInt(roundedAmount).toFixed())}
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
    roundedAmount,
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
  const data1 = api_url2 + "/" + product_image;
  const data = [
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
  ];

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
              src={api_url2 + "/" + product_image}
              alt=""
              className="product_details_img"
            /> */}
            <ProductImageCarousel img={api_url2 + "/" + product_image} />
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
                  roundedAmount={roundedAmount}
                  paymentPerday={paymentPerday}
                  numberWithCommas={numberWithCommas}
                />
              </>
            ) : (
              <>
                <OutrightComponent
                  roundedAmount={roundedAmount}
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
                <CallIcon className="call_us_icon" /> 08164020234, 090234567893
              </div>
            </div>
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
              <ProductDescription />
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
        {/*  Projects Section start*/}
        <section className="projectsSection" id="projects">
          <div className="container">
            <div className="projectsArea">
              <div className="projectsLinea"></div>
              <div className="projectsTitleContentsa">
                <div className="projectTitle">
                  <h1 className="gttitle TITE">Similar Products</h1>
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
                            ₦{numberWithCommas(asset.roundedAmount)}{" "}
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.roundedAmount * 2)}
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
                            ₦{numberWithCommas(asset.roundedAmount)}{" "}
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.roundedAmount * 2)}
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
          <div className="accordion_title">
            Frequently Asked Questions(FAQ).
          </div>
          <Accordion title="How do I save for a product.">
            <div className="accordion_body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              autem saepe error facilis earum beatae cum dolorem commodi odio
              non quidem dicta iusto animi nobis fugiat quae esse enim porro ab,
              quas fuga? Esse repellat officiis accusantium? Commodi, repellat
              voluptas.
            </div>
          </Accordion>
          <Accordion title="How do I save for a product.">
            <div className="accordion_body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              autem saepe error facilis earum beatae cum dolorem commodi odio
              non quidem dicta iusto animi nobis fugiat quae esse enim porro ab,
              quas fuga? Esse repellat officiis accusantium? Commodi, repellat
              voluptas.
            </div>
          </Accordion>
          <Accordion title="How do I save for a product.">
            <div className="accordion_body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              autem saepe error facilis earum beatae cum dolorem commodi odio
              non quidem dicta iusto animi nobis fugiat quae esse enim porro ab,
              quas fuga? Esse repellat officiis accusantium? Commodi, repellat
              voluptas.
            </div>
          </Accordion>
          <Accordion title="How do I save for a product.">
            <div className="accordion_body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              autem saepe error facilis earum beatae cum dolorem commodi odio
              non quidem dicta iusto animi nobis fugiat quae esse enim porro ab,
              quas fuga? Esse repellat officiis accusantium? Commodi, repellat
              voluptas.
            </div>
          </Accordion>
          <Accordion title="How do I save for a product.">
            <div className="accordion_body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              autem saepe error facilis earum beatae cum dolorem commodi odio
              non quidem dicta iusto animi nobis fugiat quae esse enim porro ab,
              quas fuga? Esse repellat officiis accusantium? Commodi, repellat
              voluptas.
            </div>
          </Accordion>
          <Accordion title="How do I save for a product.">
            <div className="accordion_body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              autem saepe error facilis earum beatae cum dolorem commodi odio
              non quidem dicta iusto animi nobis fugiat quae esse enim porro ab,
              quas fuga? Esse repellat officiis accusantium? Commodi, repellat
              voluptas.
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

export default ItemDetailComponent;
