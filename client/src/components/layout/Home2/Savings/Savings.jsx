import React, { useState, useEffect } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Carousel from "react-multi-carousel";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";
import NumberFormat from "react-number-format";
import "../../../../css/savings.css";

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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
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

const Savings = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //   var elementoo = document.getElementById("element");
  // //   const paused = elementoo.style.animationPlayState === "paused";

  //   const running = elementoo.style.animationPlayState === "running";

  const [itemGalleryShow, setItemGalleryShow] = useState([]);
  const [outrightProducts, setOutrightProducts] = useState([]);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/products", null, config)
      .then((data) => {
        console.log(data.data.data, "phlip");

        setItemGalleryShow(data.data.data);
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });
  }, []);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/product/retrieve/outright/products", null, config)
      .then((data) => {
        console.log(data.data.data, "phlip222");

        setOutrightProducts(data.data.data);
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });
  }, []);
  return (
    <div>
      <section className="savings_section">
        <div className="container">
          <div className="savings_area">
            <div className="savings_area1">
              <div className="savings_area1_title">Target Savings</div>
              <div className="savings_area1_para">
                Reach all your unique savings goals, individually or as a group.
                Earn up to 13% p.a.
              </div>
              <a href="/login">
                <button className="savings_area_btn">Start saving</button>
              </a>
            </div>
            <div className="savings_area2">
              <img
                src="/img/save_app_phones.png"
                alt=""
                className="save_app_phone"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ============ */}
      {/* ============ */}
      {/* ============ */}
      {/* ============ */}
      <section className="savings_section2">
        <div className="container">
          <div className="savings_section2_area">
            <div className="savings_section2_area_txts">
              <div className="savings_section2_area_title">
                Save towards multiple goals
              </div>
              <div className="savings_section2_area_para">
                Target Savings helps you get there faster. You can even team up
                with others to reach a collective target.
              </div>
            </div>
            <div className="savings_section2_area_conts">
              <div
                className="savings_section2_area_box1"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <AccountBalanceWalletIcon className="conts1_box1_contents_icon" />
                <div className="build_savings_area2_conts1_box1_contents">
                  {" "}
                  <div className="build_savings_area2_conts1_box1_title">
                    Get what you need right now.
                  </div>
                  <div className="build_savings_area2_conts1_box1_para">
                    Make your first savings today and the rest over 6 weeks. It
                    is that simple to acquire any household items.
                  </div>
                </div>
              </div>
              {/* ====== */}
              {/* ====== */}
              {/* ====== */}
              <div
                className="savings_section2_area_box1"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <AccountBalanceWalletIcon className="conts1_box1_contents_icon" />
                <div className="build_savings_area2_conts1_box1_contents">
                  {" "}
                  <div className="build_savings_area2_conts1_box1_title">
                    Get what you need right now.
                  </div>
                  <div className="build_savings_area2_conts1_box1_para">
                    Make your first savings today and the rest over 6 weeks. It
                    is that simple to acquire any household items.
                  </div>
                </div>
              </div>
              {/* ====== */}
              {/* ====== */}
              {/* ====== */}
              <div
                className="savings_section2_area_box1"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <AccountBalanceWalletIcon className="conts1_box1_contents_icon" />
                <div className="build_savings_area2_conts1_box1_contents">
                  {" "}
                  <div className="build_savings_area2_conts1_box1_title">
                    Get what you need right now.
                  </div>
                  <div className="build_savings_area2_conts1_box1_para">
                    Make your first savings today and the rest over 6 weeks. It
                    is that simple to acquire any household items.
                  </div>
                </div>
              </div>
              {/* ====== */}
              {/* ====== */}
              {/* ====== */}
            </div>
          </div>
        </div>
      </section>
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}

      {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}
      <section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsLinea"></div>
            <div className="projectsTitleContentsa">
              <div className="projectTitle">
                <h1 className="gttitle TITE">Top Deals</h1>
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
              {outrightProducts.map((asset) => (
                // <div className="cardA">
                //   <div className="img">
                //     <div
                //       className="img-sub"
                //       style={{
                //         backgroundImage: `url(${asset.img})`,
                //         height: "200px",
                //         width: "100%",
                //         backgroundRepeat: "no-repeat",
                //         backgroundSize: "cover",
                //         borderRadius: "8px",
                //         borderBottomLeftRadius: "0px",
                //         borderBottomRightRadius: "0px",
                //         backgroundPositionY: "center",
                //       }}
                //     >
                //       {/* <div className="img-amount">
                //       <NumberFormat
                //         value={1000}
                //         displayitems_remainings={"text"}
                //         thousandSeparator={true}
                //         prefix={"$"}
                //       />
                //     </div> */}
                //     </div>
                //   </div>

                //   <div className="cardDetails" style={{ textAlign: "left" }}>
                //     <h1 className="cardHeader">{asset.name}</h1>
                //     <h1 className="collat-category">{asset.items_remainings}</h1>
                //     <div className="heroSlider2">
                //       <div className="slider-txts1">
                //         <div className="h-texts">
                //           <h3 className="htxt1a">{asset.days_left}</h3>
                //           <h3 className="htxt2a">{asset.percentage}</h3>
                //         </div>
                //       </div>
                //       {/* <div className="slider-a"></div> */}
                //       <div className="slider" style={{ height: "7px" }}>
                //         <div
                //           className="sliderafter"
                //           style={{
                //             width: `5%`,
                //             height: "7px",
                //           }}
                //         ></div>
                //       </div>
                //       <div className="slider-txts2">
                //         <div className="p-texts2a">
                //           <p className="ptxt2a">Remaining Items: 100</p>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                //   </div>
                // <a href={`/products/details/${asset.id}/${asset.name}`}>
                //   <li className="carous_list">
                //     <div
                //       className="storeTiles_storeTileContainer__HoGEa"
                //       style={{
                //         backgroundImage: `url(${asset.img})`,
                       
                //       }}
                //     >
                //       <div className="storeTiles_storeTileOffersContainer__3v8lC">
                //         <button className="items_remaining_btn">
                //           {asset.Save_button}
                //         </button>
                //         <button className="items_remaining_btn2">
                //           {asset.percentage} off
                //         </button>
                //       </div>
                //       <div className="storeTiles_storeTileBottomContainer__2sWHh">
                //         <div className="asset_name">{asset.name}</div>
                //         <div className="asset_title">
                //           {asset.items_remainings}
                //         </div>
                //       </div>
                     
                //     </div>
                //   </li>
                // </a>
                <a
                      href={`/products/details/${asset.id}/${asset.product_name}`}
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
                              save now
                            </button>
                            <button className="items_remaining_btn2">
                              40 off
                            </button>
                          </div>
                          <div className="storeTiles_storeTileBottomContainer__2sWHh">
                            <div className="asset_name">
                              {asset.product_name}
                            </div>
                            <div className="asset_title">
                              {asset.unitCount}
                              {asset.unitCount === 1
                                ? "item"
                                : asset.unitCount < 1
                                ? " "
                                : "items"}
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
      {/*  Projects Section start*/}
      <section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsLinea"></div>
            <div className="projectsTitleContentsa">
              <div className="projectTitle">
                <h1 className="gttitle TITE">Most Popular</h1>
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
              infinite={true}
              draggable={true}
              swipeable={true}
              // transitionDuration={1000}
              style={{ height: "25em" }}
            >
              {itemDetails.map((asset) => (
                // <div className="cardA">
                //   <div className="img">
                //     <div
                //       className="img-sub"
                //       style={{
                //         backgroundImage: `url(${asset.img})`,
                //         height: "200px",
                //         width: "100%",
                //         backgroundRepeat: "no-repeat",
                //         backgroundSize: "cover",
                //         borderRadius: "8px",
                //         borderBottomLeftRadius: "0px",
                //         borderBottomRightRadius: "0px",
                //         backgroundPositionY: "center",
                //       }}
                //     >
                //       {/* <div className="img-amount">
                //       <NumberFormat
                //         value={1000}
                //         displayitems_remainings={"text"}
                //         thousandSeparator={true}
                //         prefix={"$"}
                //       />
                //     </div> */}
                //     </div>
                //   </div>

                //   <div className="cardDetails" style={{ textAlign: "left" }}>
                //     <h1 className="cardHeader">{asset.name}</h1>
                //     <h1 className="collat-category">{asset.items_remainings}</h1>
                //     <div className="heroSlider2">
                //       <div className="slider-txts1">
                //         <div className="h-texts">
                //           <h3 className="htxt1a">{asset.days_left}</h3>
                //           <h3 className="htxt2a">{asset.percentage}</h3>
                //         </div>
                //       </div>
                //       {/* <div className="slider-a"></div> */}
                //       <div className="slider" style={{ height: "7px" }}>
                //         <div
                //           className="sliderafter"
                //           style={{
                //             width: `5%`,
                //             height: "7px",
                //           }}
                //         ></div>
                //       </div>
                //       <div className="slider-txts2">
                //         <div className="p-texts2a">
                //           <p className="ptxt2a">Remaining Items: 100</p>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                //   </div>

                <li className="carous_list">
                  <div
                    className="storeTiles_storeTileContainer__HoGEa"
                    style={{
                      backgroundImage: `url(${asset.img})`,
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
                  </div>
                </li>
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
      {/*  Projects Section start*/}
      <section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsLinea"></div>
            <div className="projectsTitleContentsa">
              <div className="projectTitle">
                <h1 className="gttitle TITE">New Deals</h1>
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
              infinite={true}
              draggable={true}
              swipeable={true}
              style={{ height: "25em" }}
            >
              {itemDetails.map((asset) => (
                // <div className="cardA">
                //   <div className="img">
                //     <div
                //       className="img-sub"
                //       style={{
                //         backgroundImage: `url(${asset.img})`,
                //         height: "200px",
                //         width: "100%",
                //         backgroundRepeat: "no-repeat",
                //         backgroundSize: "cover",
                //         borderRadius: "8px",
                //         borderBottomLeftRadius: "0px",
                //         borderBottomRightRadius: "0px",
                //         backgroundPositionY: "center",
                //       }}
                //     >
                //       {/* <div className="img-amount">
                //       <NumberFormat
                //         value={1000}
                //         displayitems_remainings={"text"}
                //         thousandSeparator={true}
                //         prefix={"$"}
                //       />
                //     </div> */}
                //     </div>
                //   </div>

                //   <div className="cardDetails" style={{ textAlign: "left" }}>
                //     <h1 className="cardHeader">{asset.name}</h1>
                //     <h1 className="collat-category">{asset.items_remainings}</h1>
                //     <div className="heroSlider2">
                //       <div className="slider-txts1">
                //         <div className="h-texts">
                //           <h3 className="htxt1a">{asset.days_left}</h3>
                //           <h3 className="htxt2a">{asset.percentage}</h3>
                //         </div>
                //       </div>
                //       {/* <div className="slider-a"></div> */}
                //       <div className="slider" style={{ height: "7px" }}>
                //         <div
                //           className="sliderafter"
                //           style={{
                //             width: `5%`,
                //             height: "7px",
                //           }}
                //         ></div>
                //       </div>
                //       <div className="slider-txts2">
                //         <div className="p-texts2a">
                //           <p className="ptxt2a">Remaining Items: 100</p>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                //   </div>

                <li className="carous_list">
                  <div
                    className="storeTiles_storeTileContainer__HoGEa"
                    style={{
                      backgroundImage: `url(${asset.img})`,
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
                  </div>
                </li>
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
      {/* ===== */}
      {/* ===== */}
      {/* ===== */}
      {/* ===== */}
      {/* ===== */}
      <section className="users_compliment_section">
        <div className="container">
          <div className="users_compliment_area">
            <div className="users_compliment_box">
              <div class="testimonials">
                <div height="857" class="sc-bdfBQB element" id="element">
                  <div class="box">
                    <small style={{ color: "#239e54" }}>
                      Friday, 27th of August 2021 by 20:39 PM
                    </small>
                    <div class="mt-20 clear-right">
                      <div>
                        <h6>Helen S</h6>
                        <p className="compliment_para">
                          Wow! Where has Piggyvest been all my adult life?.... I
                          wish I knew about Piggyvest in my early days, I knew
                          about it in a group chat on Whatsapp, at first I "said
                          to myself this can't be real", but once I sign in, I
                          got impressed and challenged myself. I am able to save
                          money monthly. I love it!" "Piggyvest helped me to
                          save better especially for rainy days. It's hard
                          saving on your own and very tempting but with
                          Piggyvest, I get to save with discipline." I love to
                          share this with my friends.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="box">
                    <small style={{ color: "#239e54" }}>
                      Wednesday, 25th of August 2021 by 21:33 PM
                    </small>
                    <div class=" mt-20 clear-right">
                      <div>
                        <h6>Kenechukwu E</h6>
                        <p className="compliment_para">
                          I used to have a problem of spending money on the go.
                          When my brother told me about Piggyvest I was
                          reluctant. But I am happy he persuaded me. Piggyvest
                          has helped me to instill discipline financially.
                          Piggyvest is a sure way to prepare for the future.
                          Trust piggyvest they got your back👍
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="box">
                    <small style={{ color: "#239e54" }}>
                      Tuesday, 24th of August 2021 by 18:09 PM
                    </small>
                    <div class=" mt-20 clear-right">
                      <div>
                        <h6>Cynthia C</h6>
                        <p className="compliment_para">
                          PiggyVest has helped my life truly in many ways. I was
                          kinda restless, helpless, but PiggyVest gave me the
                          courage to stand. I couldn't save nor make a profit. I
                          found PiggyVest it changed my life. It gave me a
                          turnaround. I made a huge amount from it, which have
                          helped me Soo much in my everyday life especially my
                          Education, finance, etc This is not the opportunity
                          you should miss, have a plan B, think better for the
                          future.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="users_compliment_number">
              <div className="compliment_number_title">
                Over 2billion naira in loans.
              </div>
              <div className="compliment_number_para">
                Since launching in 2020, over 3,000,000 people have used
                PiggyVest to manage their money better, avoid over-spending and
                be more accountable.
              </div>
              <a href="/signup">
                <button className="compliment_btn">
                  Create a free account
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      <section className="featured_section">
        <div className="container">
          <div className="gtstoriesArea">
            {/* Carousel start==============================
==============================================
============================= */}
            <Carousel
              responsive={responsive}
              className="partnerCards"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={3000}
              infinite={true}
              draggable={true}
              swipeable={true}
            >
              <div className="partnerLogo1">
                <a href="https://cointelegraph.com/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/coin-telegraph.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://finance.yahoo.com/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/YAHOOFINANCE.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://www.newsbtc.com/" className="partnerLink">
                  {" "}
                  <img src="/img/NEWSBTC.svg" alt="" className="partnerlog" />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://apnews.com/" className="partnerLink">
                  {" "}
                  <img src="/img/APNEWS.svg" alt="" className="partnerlog" />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://independent.ng/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/INDEPENDENT.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://guardian.ng/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/THEGUARDIAN.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://nairametrics.com/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/NAIRAMETRICS.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
            </Carousel>
            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Savings;
