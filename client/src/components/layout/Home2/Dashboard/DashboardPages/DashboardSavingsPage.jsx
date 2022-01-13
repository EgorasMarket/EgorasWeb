import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "../DashboardStyles/dashboard_savings.css";

const lockedItems = [
  {
    id: 1,
    img: "/img/samsung_tv_555.jpeg",
    name: "Samsung smart tv series",
    total_locked_amount: " 150,000",
    days_left: "28",
    days_left_percent: "82%",
    quantity: "1",
    unit_price: "350,000",

    // ratio: "175%",
  },
  {
    id: 2,
    img: "/img/samsung_tv_555.jpeg",
    name: "Lg smart tv series",
    total_locked_amount: " 80,000",
    days_left: "13",
    days_left_percent: "27%",
    quantity: "2",
    unit_price: "150,000",
  },
  {
    id: 3,
    img: "/img/samsung_tv_555.jpeg",
    name: "Iphone 12pro max",
    total_locked_amount: " 250,000",
    days_left: "23",
    days_left_percent: "77%",
    quantity: "2",
    unit_price: "550,000",
  },
];

const itemDetails = [
  {
    id: 1,
    img: "/img/BAG.jpeg",
    name: "Samsung smart tv series",
    items_remainings: "16 items left.",
    Save_button: "Save now",

    percentage: "100%",
    // ratio: "175%",
  },
  {
    id: 2,
    img: "/img/samsung_tv_555.jpeg",
    name: "Lg smart tv series",
    items_remainings: "16 items left.",
    Save_button: "Save now",
    percentage: "100%",
  },
  {
    id: 3,
    img: "/img/BAG.jpeg",
    name: "Iphone 12pro max",
    items_remainings: "16 items left.",
    Save_button: "Save now",
    percentage: "100%",
  },
  {
    id: 4,
    img: "/img/BAG.jpeg",
    name: "Samsung galaxy s9+",
    items_remainings: "16 items left.",
    Save_button: "Save now",
    percentage: "100%",
  },
  {
    id: 5,
    img: "/img/BAG.jpeg",
    name: "Samsung galaxy s9+",
    items_remainings: "16 items left.",
    Save_button: "Save now",

    percentage: "100%",
  },
  {
    id: 6,
    img: "/img/BAG.jpeg",
    name: "Samsung galaxy s9+",
    items_remainings: "16 items left.",
    Save_button: "Save now",
    percentage: "100%",
  },
  {
    id: 7,
    img: "/img/BAG.jpeg",
    name: "Samsung galaxy s9+",
    items_remainings: "16 items left.",
    Save_button: "Save now",
    percentage: "100%",
  },
  {
    id: 8,
    img: "/img/BAG.jpeg",
    name: "Samsung galaxy s9+",
    items_remainings: "16 items left.",
    Save_button: "Save now",
    percentage: "100%",
  },
];

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
function DashboardSavingsPage() {
  const [savedNum, setSavedNum] = useState(5);
  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className="dash_savings_area">
            <div className="dash_savings_area1">
              <div className="dash_savings_area1_title">Savings Overview</div>
              <div className="savings_overview_card">
                <div className="savings_overview_card1 over_first_card"></div>
                <div className="savings_overview_card1 over_second_card"></div>
                <div className="savings_overview_card1  over_third_card"></div>
                <div className="savings_overview_card1 over_fourth_card"></div>
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

                    {lockedItems.map((asset) => (
                      <tbody
                        className="save_items_cat popular-categories"
                        id="popular-categories"
                      >
                        {" "}
                        <tr className="assets-category-row">
                          <td className="save_item_data">
                            <div className="assets-data height_data">
                              <img
                                src={asset.img}
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
                                {asset.name}
                              </div>
                              <div className="save_item_days_left">
                                {asset.days_left} days left
                                <div className="days_left_percentage_cont">
                                  <span
                                    className="days_left_percentage"
                                    style={{
                                      width: asset.days_left_percent,
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
                              {asset.quantity}
                            </div>
                          </td>
                          <td className="save_item_data1b">
                            <div className="assets-data-name center_name">
                              #{asset.unit_price}
                            </div>
                          </td>
                          <td className="save_item_data1b">
                            <div className="assets-data-name_last">
                              #{asset.total_locked_amount}
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
                    {itemDetails.map((product) => (
                      <a
                        href={`/products/details/${product.id}/${product.name}`}
                      >
                        <li className="carous_list">
                          <div
                            className="storeTiles_storeTileContainer__HoGEa"
                            style={{
                              backgroundImage: `url(${product.img})`,
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
                                {product.Save_button}
                              </button>
                              <button className="items_remaining_btn2">
                                {product.percentage} off
                              </button>
                            </div>
                            <div className="storeTiles_storeTileBottomContainer__2sWHh">
                              <div className="asset_name">{product.name}</div>
                              <div className="asset_title">
                                {product.items_remainings}
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

export default DashboardSavingsPage;
