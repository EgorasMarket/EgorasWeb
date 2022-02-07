import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import axios from "axios";
import { connect } from "react-redux";
import {
  API_URL2 as api_url2,
} from "../../../../../actions/types";
import "../DashboardStyles/dashboard_savings.css";


const responsive7 = {
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
function DashboardSavingsPage({ match, auth }) {
  const [savedNum, setSavedNum] = useState(5);
  const [itemdisplay, setItemDisplay] = useState([]);
  const [product_id, setProductId] = useState(match.params.id);
  const [productDetail, setProductDetail] = useState({
    product_image: "",
    product_name: "",
    amount: "",
    product_duration: "",
  });

  const { product_image, product_name, amount, product_duration } =
    productDetail;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/products", null, config)
      .then((data) => {
        console.log(data.data.data, "chukwubuike");

        setItemDisplay(data.data.data);

        console.log("=============");
        console.log(itemdisplay);
        console.log("=============");
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });
  }, [auth]);

  useEffect(() => {
    const body = JSON.stringify({
      product_id,
    });

    console.log(body);

    axios
      .post(api_url2 + "/v1/product/retrieve/specific", body, config)
      .then((data) => {
        console.log(data.data.data, "king");

        setProductDetail({
          product_image: data.data.data.product_image,
          product_name: data.data.data.product_name,
          amount: data.data.data.amount,
          product_duration: data.data.data.product_duration,
        });
      })
      .catch((err) => {
        console.log(err.response); // "oh, no!"
      });
  }, []);

  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className="dash_savings_area">
            <div className="dash_savings_area1">
              <div className="dash_savings_area1_title">Savings Overview</div>
              <div className="savings_overview_card">
                <div className="savings_overview_card1 over_first_card">
                  <div className="card_over_body">
                    <div className="card_over_title">
                      Total Balance
                      <div className="card_over_balance">#50,000</div>
                    </div>

                    <div className="card_over_balance_button">Start Saving</div>
                  </div>
                </div>
                <div className="savings_overview_card1 over_first_card">
                  <div className="card_over_body">
                    <div className="card_over_title">
                      Total Balance
                      <div className="card_over_balance">#50,000</div>
                    </div>

                    <div className="card_over_balance_button">Start Saving</div>
                  </div>
                </div>
                <div className="savings_overview_card1 over_first_card">
                  <div className="card_over_body">
                    <div className="card_over_title">
                      Total Balance
                      <div className="card_over_balance">#50,000</div>
                    </div>

                    <div className="card_over_balance_button">Start Saving</div>
                  </div>
                </div>
                <div className="savings_overview_card1 over_first_card">
                  <div className="card_over_body">
                    <div className="card_over_title">
                      Total Balance
                      <div className="card_over_balance">#50,000</div>
                    </div>

                    <div className="card_over_balance_button">Start Saving</div>
                  </div>
                </div>
                {/* <div className="savings_overview_card1 over_second_card"></div>
                <div className="savings_overview_card1  over_third_card"></div>
                <div className="savings_overview_card1 over_fourth_card"></div> */}
              </div>
              <div className="savings_overview_body_cont1">
                Total Number of Locked Items{" "}
                <span className="saved_figure">{savedNum}</span>
              </div>
              <div className="locked_items">
                <div class="save_prod_deta">
                  <table className="save_item_table">
                    <thead className="assets-category-titles">
                      <tr className="assets">
                        <th className="assets-category-titles-heading1">
                          Item
                        </th>
                        <th className="assets-category-titles-heading1">
                          Item Details
                        </th>
                        <th className="assets-category-titles-heading1 quant">
                          Quantity
                        </th>
                        <th className="assets-category-titles-heading1 quant">
                          Unit Price
                        </th>
                        <th className="assets-category-titles-heading1_last">
                          Sub Total
                        </th>
                      </tr>
                    </thead>

                    {itemdisplay.slice(0, 5).map((asset) => (
                      <tbody
                        className="save_items_cat popular-categories"
                        id="popular-categories"
                      >
                        {" "}
                        <tr className="assets-category-row">
                          <td className="save_item_data">
                            <div className="assets-data height_data">
                              <img
                                src={api_url2 + "/" + asset.product_image}
                                alt=""
                                className="save_item_img_img"
                              />
                            </div>
                          </td>
                          {/* ======== */}
                          {/* ======== */}
                          {/* ======== */}
                          {/* ======== */}
                          <td className="save_item_data1">
                            <div className="save_items_details">
                              <div className="save_items_details1">
                                {asset.product_name}
                              </div>
                              <div className="save_item_days_left">
                                {asset.unitCount} days left
                                <div className="days_left_percentage_cont">
                                  <span
                                    className="days_left_percentage"
                                    style={{
                                      width:
                                        100 %
                                        -(
                                          (asset.amount * 100) /
                                          asset.unitCount
                                        ),
                                    }}
                                  ></span>
                                </div>
                              </div>
                              <div className="save_total_locked_amount">
                                <span className="items_left_amount">
                                  Total Amount Locked on Item
                                </span>
                                #{asset.total_locked_amount}
                              </div>
                            </div>
                          </td>
                          <td className="save_item_data1b">
                            <div className="assets-data-name center_name">
                              {asset.unitCount}
                            </div>
                          </td>
                          <td className="save_item_data1b">
                            <div className="assets-data-name center_name">
                              #{asset.amount}
                            </div>
                          </td>
                          <td className="save_item_data1b">
                            <div className="assets-data-name_last">
                              #{asset.amount * asset.unitCount}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
            <div className="dash_savings_area2">
              <div className="savings_transactions_divs"></div>
            </div>
            {/* ====================================== */}
            {/* ====================================== */}
            {/* ====================================== */}
            {/* ====================================== */}
            {/* ====================================== */}
            {/*  Projects Section start*/}
            <section className="projectsSection savvvvv" id="projects">
              <div className="container">
                <div className="projectsArea">
                  <div className="projectsLinea"></div>
                  <div className="projectsTitleContentsa">
                    <div className="projectTitle">
                      <h1 className="gttitle TITE">New Products</h1>
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
                    responsive={responsive7}
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
                    {itemdisplay.map((product) => (
                      <a
                        href={`/dashboard/products/details/${product.id}/${product.product_name}`}
                      >
                        <li className="carous_list">
                          <div
                            className="storeTiles_storeTileContainer__HoGEa"
                            style={{
                              backgroundImage: `url(${
                                api_url2 + "/" + product.product_image
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
                                save now
                              </button>
                              <button className="items_remaining_btn2">
                                20% off
                              </button>
                            </div>
                            <div className="storeTiles_storeTileBottomContainer__2sWHh">
                              <div className="asset_name">
                                {product.product_name}
                              </div>
                              <div className="asset_title">
                                {product.unitCount}
                                {product.unitCount === 1
                                  ? "item left"
                                  : product.unitCount <= 1
                                  ? "no item left"
                                  : product.unitCount > 1
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
            {/* ====================================== */}
            {/* ====================================== */}
            {/* ====================================== */}
            {/* ====================================== */}
            {/* ====================================== */}
            {/* ====================================== */}
            {/* ====================================== */}
            {/* ====================================== */}
          </div>
        </div>
      </section>
    </div>
  );
}

// export default DashboardSavingsPage;


const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  // cart: state.shop.cart
});

// export default DashboardSidebar;

export default connect(mapStateToProps, {})(DashboardSavingsPage);
