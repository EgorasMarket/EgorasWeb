import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "../../DashboardStyles/category.css";
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

const PhonesCatPage = () => {
  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className="categories_page_area">
            <div className="cat_banner_heading">
              Connect Your World
              <img
                src="/img/fake_assets/refurb_img.jpeg"
                alt=""
                className="refurb_img_bann"
              />
            </div>
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* Carousel start==============================
==============================================
============================= */}

            <div className="products_display_body pad_bot">
              <div className="products_display_body_heading">
                Apple Phones
                <dispatchEvent></dispatchEvent>
              </div>
              <div className="cat_carous">
                <Carousel
                  responsive={responsive6}
                  className="partnerCards LEFTARROW"
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
                  {itemDetails.map((asset) => (
                    <a href={`/products/details/${asset.id}/${asset.name}`}>
                      <li className="carous_list">
                        <div
                          className="storeTiles_storeTileContainer__HoGEa"
                          style={{
                            backgroundImage: `url(${asset.img})`,
                          }}
                        >
                          <div className="storeTiles_storeTileOffersContainer__3v8lC">
                            <button className="items_remaining_btn">
                              {asset.Save_button}
                            </button>
                            <button className="items_remaining_btn2">
                              {asset.percentage} off
                            </button>
                          </div>
                          <div className="storeTiles_storeTileBottomContainer__2sWHh">
                            <div className="asset_name">{asset.name}</div>
                            <div className="asset_title">
                              {asset.items_remainings}
                            </div>
                          </div>
                          {/* </a> */}
                        </div>
                      </li>
                    </a>
                  ))}
                </Carousel>
              </div>
            </div>
            {/* Carousel end==============================
==============================================
============================= */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* Carousel start==============================
==============================================
============================= */}

            <div className="products_display_body pad_bot">
              <div className="products_display_body_heading">
                Android Phones
                <dispatchEvent></dispatchEvent>
              </div>
              <div className="cat_carous">
                <Carousel
                  responsive={responsive6}
                  className="partnerCards LEFTARROW"
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
                  {itemDetails.map((asset) => (
                    <a href={`/products/details/${asset.id}/${asset.name}`}>
                      <li className="carous_list">
                        <div
                          className="storeTiles_storeTileContainer__HoGEa"
                          style={{
                            backgroundImage: `url(${asset.img})`,
                          }}
                        >
                          <div className="storeTiles_storeTileOffersContainer__3v8lC">
                            <button className="items_remaining_btn">
                              {asset.Save_button}
                            </button>
                            <button className="items_remaining_btn2">
                              {asset.percentage} off
                            </button>
                          </div>
                          <div className="storeTiles_storeTileBottomContainer__2sWHh">
                            <div className="asset_name">{asset.name}</div>
                            <div className="asset_title">
                              {asset.items_remainings}
                            </div>
                          </div>
                          {/* </a> */}
                        </div>
                      </li>
                    </a>
                  ))}
                </Carousel>
              </div>
            </div>
            {/* Carousel end==============================
==============================================
============================= */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            <div className="cat_banner_group">
              <div className="cat_banner_group1">
                <img
                  src="/img/fake_assets/apple_iphone_13_gr_1.png"
                  alt=""
                  className="img_gr1"
                />
              </div>
              <div className="cat_banner_group1">
                <img
                  src="/img/fake_assets/apple_iphone_13_gr_1.png"
                  alt=""
                  className="img_gr1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhonesCatPage;
