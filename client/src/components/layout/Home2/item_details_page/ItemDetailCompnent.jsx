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
// import CheckoutModalComponent from "./CheckoutModalComponent.jsx";
import CheckoutModalComponent from "./CheckoutModalComponent";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Accordion from "./Accordion";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";

const InstallmentComponent = ({product_duration, rounded, percentage, initial_deposit,amount}) =>{
  
  return (
    <div>
        <div className="lll">
          <div className="max_dura">
            Savings max-duration:{" "}
            <p className="months_class"> {product_duration} days</p>
          </div>
 
            <div>
              <span>₦{amount}</span>
              <p className="amnt_per_day">
                Savings Amount to be paid per day:{""}
                <span className="calc_amnt_div">N {rounded}</span>
              </p>
            </div>
        </div>
        {/* <hr className="horizontal_rule" /> */}
        {/* ------- */}
          <div className="quantity_div">
            <div className="items_left_div">
              This item has an upfront payment of : {percentage}%
            </div>
            <span className="upfront_para">
              That means you are to pay #{initial_deposit} before this
              item can be locked by you.
            </span>
          </div>
    </div>
  )
}

const OutrightComponent = ({product_duration, rounded, percentage, initial_deposit,amount}) =>{
  
  return (
    <div>
        <div className="lll">
         
 
            <div>
              <span>₦{amount}</span>
         
            </div>
        </div>
        {/* <hr className="horizontal_rule" /> */}
        {/* ------- */}
          <div className="quantity_div">
         
            <span className="upfront_para">
              That means you are to pay an outright fee for this product.
            </span>
          </div>
    </div>
  )
}

const ItemDetailComponent = ({
  payload,
  card,
  user_id,
  CloseModal,
  OpenModal,
  closeDetailModal,
  openDetailsModal,
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
  const [activeBg,setActiveBg]=useState("descript")
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
    amount_per_day,
    days_left,
    rounded,
    total_amount,
    no_of_days,
  } = payload;
  let spec = [product_specifications];
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

    const outrightScenario = () => {

    }
    const installmentScenario = () => {

    }
      switch(payment_type) {

        case "OUTRIGHT": 
          outrightScenario(); 
          break
        case "INSTALLMENT": 
          installmentScenario() 
          break; 


      }
  }

  useEffect(() => {

    checkProductType(product_type)


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


     {
       console.log(spec, " welcome  Daniel");
     }
  


  return (
    <div className="other2">
      {modal == false ? null : (
        <div className="checkout_main">
          <div className="checkout_modal_out" onClick={CloseModal}></div>
          <Dashboard_Checkout_Page
            cAmount={parseInt(amount)}
            click={CloseModal}
          />
        </div>
      )}
      {/* {dataFlow.map((item)=>{return( */}
      <section className="no-bg">
        <div className="container">
          <div className="products_area">
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
                <div
                  className="product_details_code"
                  style={{ color: "#239e54" }}
                >
                  <span className="product_code_title">Brand: </span>
                  {product_brand}
                  {/* {props.Brand} */}
                </div>
                {/* ----------------- */}
                {/* <hr className="horizontal_rule" /> */}
                {/* -------------- */}
                {payment_type === "INSTALLMENT" ?  (
                  <>
                <InstallmentComponent  
                initial_deposit={initial_deposit}
                product_duration={product_duration} 
                rounded={rounded}
                percentage={percentage}
                amount = {amount}
                />  
                  </>

                ): 

                <>
                  <OutrightComponent 
                    />
                </>
                  
                  }
                {/* ======= */}
                {/* ======= */}
                {/* ======= */}
                {/* ======= */}
                {/* <hr className="horizontal_rule" /> */}
                {/* ------- */}
                <div className="buy_now_btn_div">
                  <button
                    className="buy_now_button"
                    onClick={() => {
                      openDetailsModal();
                    }}
                  >
                    {payment_type !== 1 ? "Proceed" : "Proceed to checkout"}
                  </button>
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
                  // onClick={changeBg}
                  className={
                    activeBg == "descript"
                      ? "description_click1 description_click1_active"
                      : "description_click1"
                  }
                >
                  Description
                </div>
              </div>

              <div className="description_body">
                <div className="description_table">
                  <table class="_3a09a_1e-gU">
                    <tbody>
                      {spec.map((apple) => (
                      <tr>
                          <td style={{display:'flex',flexDirection:'column'}}>{apple}</td>
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
                            }}
                          >
                            <div className="storeTiles_storeTileOffersContainer__3v8lC">
                              <button className="items_remaining_btn">
                                save now
                              </button>
                              <button className="items_remaining_btn2">
                                20% off
                              </button>
                            </div>
                            <div className="storeTiles_storeTileBottomContainer__2sWHh">
                              <div className="asset_name">
                                {asset.product_name}
                              </div>
                              <div className="asset_title">
                                {asset.unitCount}
                                {asset.unitCount === 1
                                  ? "item left"
                                  : asset.unitCount <= 1
                                  ? "no item left"
                                  : asset.unitCount > 1
                                  ? "items left"
                                  : null}
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
            {/*  Projects Section end*/}
            {/* =================================================================================================================================================================================================================================================================== */}
            {detailsModal == true ? <CheckoutModalComponent /> : null}
          </div>
        </div>
      </section>
      {/* )})} */}
    </div>
  );
};

export default ItemDetailComponent;
